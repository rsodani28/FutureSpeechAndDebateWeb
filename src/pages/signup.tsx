import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Signup() {
  const [isQRExpanded, setIsQRExpanded] = useState(false);
  
  // Prevent body scrolling when QR code is expanded
  const toggleQRExpansion = (expand: boolean) => {
    setIsQRExpanded(expand);
    if (expand) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  // Clean up the body style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Head>
        <title>Register & Payment - Future Speech & Debate Camp</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="description" content="Register for Future Speech & Debate Camp. Complete our form and pay with convenient options including Zelle, cash, or check." />
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Register for Future Speech & Debate Camp
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Join us for an unforgettable week of learning, growth, and fun. Spaces fill up quickly!
        </p>
      </div>

      <div className="mt-16 bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Camp Registration Details</h2>
            
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <div className="bg-blue-50 p-4 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm text-blue-700">
                        Registration for both beginner and advanced camps is closed until next summer!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-medium text-gray-900">Camp Options</h3>
            
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Beginner Camp</h3>
                  <p className="mt-4 text-gray-500">For students with little to no experience in speech and debate</p>
                  <p className="mt-2 text-gray-900 font-medium">July 15-19, 2024 • 9:00 AM - 12:00 PM</p>
                  <p className="mt-2 text-gray-900">$100 per student</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>Introduction to all speech and debate events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>Public speaking fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>Basic argument construction</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Advanced Camp</h3>
                  <p className="mt-4 text-gray-500">For students with previous speech and debate experience</p>
                  <p className="mt-2 text-gray-900 font-medium">July 22-26, 2024 • 9:00 AM - 12:00 PM</p>
                  <p className="mt-2 text-gray-900">$100 per student</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>Advanced techniques for specific events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>In-depth research and case development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 text-green-500 mr-2">✓</span>
                      <span>Personalized coaching and feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-medium text-gray-900">Registration Form</h3>
            <p className="mt-4 text-gray-500 mb-6">
              Please complete the registration form below. You can pay using the provided methods or with cash on the first day of camp.
            </p>
            <div className="w-full bg-white rounded-lg overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfeR87xn4xny8UvnjqFDkGUEzDthKzXoOtzOXoUJP5fBHmfmg/viewform?embedded=true" 
                width="100%" 
                height="800" 
                className="border-0"
                title="Future Speech & Debate Camp Registration Form"
              >
                Loading registration form...
              </iframe>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h4 className="text-lg font-medium text-gray-900">Payment Options</h4>
              <div className="mt-6 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-full md:w-1/2">
                  <p className="text-gray-600 mb-4">
                    After completing the registration form, you can pay the $100 camp fee using one of these methods:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Zelle: Scan the QR code or send to <span className="font-medium">720-755-7705 : Rishabh Sodani</span></li>
                    <li>Cash: Bring payment on the first day of camp</li>
                    <li>Check: Make payable to "Future Speech & Debate Camp"</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">Please include your child's name and "Speech Camp" in the payment memo/notes.</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  {isQRExpanded && (
                    <div 
                      className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
                      onClick={() => toggleQRExpansion(false)}
                    ></div>
                  )}
                  <div className={`relative bg-white p-4 rounded-lg shadow-sm border border-gray-200 ${isQRExpanded ? "fixed inset-0 z-50 flex flex-col items-center justify-center" : ""}`}>
                    <div className={`text-center mb-2 font-medium text-gray-700 ${isQRExpanded ? "text-xl" : ""}`}>Zelle QR Code</div>
                    <img 
                      src="/ZelleQR.jpg" 
                      alt="Zelle QR Code for payment" 
                      className={`object-contain mx-auto transition-all duration-300 ${isQRExpanded ? "w-auto h-auto max-w-[90vw] max-h-[70vh]" : "w-48 h-48"}`}
                    />
                    <div className={`text-center mt-2 text-sm text-gray-600 ${isQRExpanded ? "text-base max-w-md" : ""}`}>
                      {isQRExpanded 
                        ? "Point your banking app's camera at this QR code to make a payment via Zelle. You can also tap anywhere outside this box to close."
                        : "Scan with your banking app"
                      }
                    </div>
                    <button
                      onClick={() => toggleQRExpansion(!isQRExpanded)}
                      className={`mt-3 px-4 py-2 rounded-md text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                        isQRExpanded 
                          ? "bg-red-600 hover:bg-red-700 shadow-lg" 
                          : "bg-blue-600 hover:bg-blue-700 shadow-md w-full md:w-auto"
                      }`}
                    >
                      {isQRExpanded ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          Close
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.293 8.293a1 1 0 011.414 0L10 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          View Full Screen QR Code
                        </>
                      )}
                    </button>
                    {isQRExpanded && (
                      <div className="absolute top-4 right-4">
                        <button
                          onClick={() => toggleQRExpansion(false)}
                          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 text-gray-700 hover:text-gray-900 transition-colors shadow-md"
                          aria-label="Close expanded QR code"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-medium text-gray-900">Additional Information</h3>
            <div className="mt-4 prose prose-blue text-gray-500">
              <ul>
                <li>All materials are provided BUT it is recommended to bring a laptop and water bottle</li>
                <li>Snacks are provided and there will be breaks</li>
                <li>Sibling discount: 10% off second registration</li>
              </ul>
              
              <p className="mt-4">
                If you have any questions about the camp or registration process, please contact us at:   
                <span>
                  <a href="mailto:erichonor890@gmail.com" className="text-blue-600 hover:text-blue-800">
                    erichonor890@gmail.com
                  </a>
                  ,&nbsp;
                  <a href="mailto:vivaanlal11@gmail.com" className="text-blue-600 hover:text-blue-800">
                    vivaanlal11@gmail.com
                  </a>
                  ,&nbsp;
                  <a href="mailto:sodanirishabh@gmail.com" className="text-blue-600 hover:text-blue-800">
                    sodanirishabh@gmail.com
                  </a>
                </span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
