import { useState, useEffect } from "react";

// Define the Review type
export type Review = {
  id: string;
  parentName: string;
  studentName: string;
  rating: number;
  comment: string;
  createdAt: string;
  approved: boolean;
};

interface ReviewCarouselProps {
  reviews: Review[];
  isLoading: boolean;
}

export default function ReviewCarousel({ reviews, isLoading }: ReviewCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Fallback reviews in case API fails
  const fallbackReviews: Review[] = [
    {
      id: "1",
      parentName: "Test Parent 1",
      studentName: "Test Student 1",
      rating: 5,
      comment: "Much appreciated all of you in sharing your knowledge with younger kids. See you next year.",
      createdAt: "2023-07-27T05:11:54.805Z",
      approved: true
    },
    {
      id: "2",
      parentName: "Test Parent 2",
      studentName: "Test Student 2",
      rating: 5,
      comment: "A shout out to you all for hosting a very productive and engaging debate camp. I am sure all the participants look forward to your next camp. Keep us posted on the next camp schedule.",
      createdAt: "2023-07-27T05:12:00.994Z",
      approved: true
    }
  ];
  
  // Use actual reviews if available, otherwise use fallbacks
  const displayReviews = (reviews && reviews.length > 0) ? reviews : fallbackReviews;

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (displayReviews.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % displayReviews.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [displayReviews]);

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

  // Manual navigation
  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % displayReviews.length);
  };

  const goToPrev = () => {
    setActiveIndex((current) => (current - 1 + displayReviews.length) % displayReviews.length);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // We don't need the empty check anymore since we have fallback reviews
  // Using displayReviews which is guaranteed to have items
  const currentReview = displayReviews[activeIndex]!;

  return (
    <div className="relative bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto my-10">
      {/* Review content */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{currentReview.parentName}</h3>
          <div className="text-xl">
            {renderStars(currentReview.rating)}
          </div>
        </div>
        <p className="text-gray-600 mb-2">Student: {currentReview.studentName}</p>
        <p className="text-gray-700">{currentReview.comment}</p>
        <p className="text-sm text-gray-500 mt-4">
          {new Date(currentReview.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Navigation dots */}
      {displayReviews.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {displayReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Navigation arrows (only show if more than one review) */}
      {displayReviews.length > 1 && (
        <>
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 hover:bg-indigo-100 shadow-md transition-all"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 hover:bg-indigo-100 shadow-md transition-all"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
