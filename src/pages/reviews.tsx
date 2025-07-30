import { type NextPage } from "next";
import { useState } from "react";

const ReviewsPage: NextPage = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    rating: 5,
    comment: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Submit a new review
  const submitReview = async () => {
    try {
      setSubmissionStatus("loading");
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json() as { error?: string };
        throw new Error(errorData.error ?? 'Failed to submit review');
      }
      
      setSubmissionStatus("success");
      // Reset the form
      setFormData({
        parentName: "",
        studentName: "",
        rating: 5,
        comment: "",
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus("idle");
      }, 5000);
    } catch (error: unknown) {
      setSubmissionStatus("error");
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value, 10) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    void submitReview();
  };



  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Reviews</h1>
        
        {/* Submit Review Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Submit Your Review</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                  Parent Name *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                  Student Name *
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Rating *
              </label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value={5}>5 Stars - Excellent</option>
                <option value={4}>4 Stars - Very Good</option>
                <option value={3}>3 Stars - Good</option>
                <option value={2}>2 Stars - Fair</option>
                <option value={1}>1 Star - Poor</option>
              </select>
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Your Review *
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                value={formData.comment}
                onChange={handleChange}
                required
                placeholder="Tell us about your experience with Future Speech & Debate Camp..."
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <p className="text-sm text-gray-500 mt-1">Minimum 10 characters</p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submissionStatus === "loading"}
                className={`px-4 py-2 rounded-md text-white font-medium ${
                  submissionStatus === "loading"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }`}
              >
                {submissionStatus === "loading" ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </form>

          {/* Status Messages */}
          {submissionStatus === "success" && (
            <div className="mt-4 bg-green-50 border border-green-200 text-green-800 rounded-md p-4">
              Thank you for your review! Your submission is pending approval.
            </div>
          )}

          {submissionStatus === "error" && (
            <div className="mt-4 bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
              {errorMessage ?? "There was an error submitting your review. Please try again."}
            </div>
          )}
        </div>

        {/* Note about review display */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-gray-600">Thank you for submitting your review! After approval, reviews will be displayed on our home page.</p>
          <p className="text-sm text-gray-500 mt-2">All reviews are subject to approval before being published.</p>
        </div>
      </div>
  );
};

export default ReviewsPage;
