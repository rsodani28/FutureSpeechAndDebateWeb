import { type NextPage } from "next";
import { useState, useEffect } from "react";
import Layout from "~/components/Layout";

// Define the Review type
type Review = {
  id: string;
  parentName: string;
  studentName: string;
  rating: number;
  comment: string;
  createdAt: string;
  approved: boolean;
};

const AdminReviewsPage: NextPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  
  // Fetch all reviews (including unapproved) on component mount
  useEffect(() => {
    void fetchReviews();
  }, []);
  
  // Function to fetch all reviews
  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      // Get admin key from URL query parameter or local storage
      const adminKey = new URLSearchParams(window.location.search).get('adminKey') || localStorage.getItem('adminKey');
      const response = await fetch(`/api/admin/reviews${adminKey ? `?adminKey=${adminKey}` : ''}`);
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to approve or reject a review
  const updateReviewStatus = async (id: string, approved: boolean) => {
    try {
      const response = await fetch('/api/admin/reviews', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, approved }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update review status');
      }
      
      // Update local state to reflect the change
      setReviews(reviews.map(review => 
        review.id === id ? { ...review, approved } : review
      ));
      
      setMessage({
        text: `Review ${approved ? 'approved' : 'rejected'} successfully!`,
        type: 'success'
      });
      
      // Clear the message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({
        text: error instanceof Error ? error.message : 'An error occurred',
        type: 'error'
      });
    }
  };

  // Render stars for ratings display
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ));
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Review Management</h1>
        
        {/* Status Messages */}
        {message && (
          <div className={`mb-4 p-4 rounded-md ${
            message.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message.text}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">All Reviews</h2>
            <button 
              onClick={() => void fetchReviews()} 
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Refresh
            </button>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-center py-8 text-gray-500">No reviews found.</p>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className={`border p-6 rounded-lg ${
                    review.approved 
                      ? 'border-green-300 bg-green-50' 
                      : 'border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{review.parentName}</h3>
                      <p className="text-sm text-gray-600">Student: {review.studentName}</p>
                    </div>
                    <div className="text-xl">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{review.comment}</p>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleString()}
                    </p>
                    
                    <div className="flex gap-2">
                      {review.approved ? (
                        <button 
                          onClick={() => void updateReviewStatus(review.id, false)} 
                          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                        >
                          Reject
                        </button>
                      ) : (
                        <>
                          <button 
                            onClick={() => void updateReviewStatus(review.id, true)} 
                            className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                          >
                            Approve
                          </button>
                          <button 
                            onClick={() => void updateReviewStatus(review.id, false)} 
                            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdminReviewsPage;
