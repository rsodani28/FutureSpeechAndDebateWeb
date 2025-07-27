import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import ReviewCarousel, { type Review } from "~/components/ReviewCarousel";

export default function Home() {
  // Get reviews for the carousel using fetch instead of tRPC
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchReviews() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/reviews');
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
    }
    
    void fetchReviews();
  }, []);
  
  return (
    <div className="flex flex-col gap-8">
      <Head>
        <title>Home - Future Speech & Debate Camp</title>
      </Head>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Welcome to <span className="text-indigo-600">Future Speech & Debate Camp</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-600 mb-10">
            Learn to speak more confidently, think more critically, and be more mindful in just 1-2 weeks this summer.
            Taught by accomplished students who have qualified for Nationals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/about" 
              className="px-8 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              About Instructors
            </Link>
            <Link
              href="/signup"
              className="px-8 py-3 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
            >
              Sign Up Now
            </Link>
          </div>
          <div className="mt-4 text-sm text-indigo-600 font-semibold">
            <p>Beginner: July 14th-18th | Advanced: July 21st-25th</p>
            <p>9AM - 12PM @ Koelbel Library</p>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 -z-10 w-full h-full">
          <div className="absolute right-0 top-0 h-72 w-72 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute left-0 bottom-0 h-80 w-80 bg-cyan-100 rounded-full opacity-50 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Camp?</h2>
          <p className="max-w-xl mx-auto text-gray-600">
            Our camp isn't just about winning arguments — it's about helping kids find their voice, speak with purpose, and think on their feet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Hands-On Experience</h3>
            <p className="text-gray-600">
              Learn through a Nationals Debate Curriculum with real-world practice and personalized feedback.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Taught by Champions</h3>
            <p className="text-gray-600">
              Learn from accomplished students who have qualified for the NSDA National Tournament and know what it takes to succeed.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Affordable Excellence</h3>
            <p className="text-gray-600">
              At just $100 for a full week (only $6 per hour!), our camp offers exceptional value with proven results and positive parent feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Last year, Vivaan Lal, Eric Chen, and Rishabh Sodani created a summer camp to teach aspiring students how to speak more confidently, think more critically, and be more mindful. Both students and parents alike spread tons of positive feedback about their experience, pushing us to do it again.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In just 1-2 weeks of your summer, your child, if signed up for our Speech & Debate Camp, will learn all of the necessary skills used not only in speech and debate, but also in real world situations that require communication.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Taught by accomplished students who have gone through the process (and succeeded by qualifying for Nationals), this camp is sure to ignite your child's confidence and curiosity. With engaging activities, personalized feedback, and real-world applications, our camp helps kids find their voice and speak with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Parent Testimonials</h2>
          <p className="max-w-xl mx-auto text-gray-600 mb-8">
            Here's what parents had to say about our camp
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-8">
          {/* Dynamic review carousel component */}
          <ReviewCarousel reviews={reviews || []} isLoading={isLoading} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enroll Your Child?</h2>
          <p className="max-w-xl mx-auto mb-8 text-indigo-100">
            Only $100 for a full week of camp ($6 per hour) - with a 20% discount for returning students and those signing up for both sessions!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="font-bold mb-1">Beginner Camp</p>
              <p>July 14th-18th, 9AM-12PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="font-bold mb-1">Advanced Camp</p>
              <p>July 21st-25th, 9AM-12PM</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/signup"
              className="px-8 py-4 rounded-md bg-white text-indigo-700 font-bold hover:bg-indigo-100 transition-colors"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
