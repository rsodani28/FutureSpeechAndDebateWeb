import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <div className="flex flex-col gap-12">
      <Head>
        <title>About - Future Speech & Debate Camp</title>
      </Head>
      {/* About Hero */}
      <section className="py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">About Our Camp</h1>
            <p className="text-lg text-gray-600 mb-6">
              Founded by rising juniors from Cherry Creek High School, our mission is to prepare 
              the next generation of debaters for success.
            </p>
            <p className="text-gray-600">
              We offer a hands-on approach to developing essential skills in clear, confident, 
              and convincing communication. Our camp aims to combat the fear of public speaking 
              and instill unwavering confidence in every participant.
            </p>
          </div>
          <div className="flex-1 bg-gray-200 h-64 rounded-lg overflow-hidden relative">
            {/* Replace with your actual image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-500 opacity-90 flex items-center justify-center text-white text-xl font-bold p-4 text-center">
              Future Speech & Debate Camp Instructors
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Us?</h2>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            Welcome to our Speech & Debate Camp! Founded by rising juniors Eric Chen, Vivaan Lal, and Rishabh Sodani 
            from Cherry Creek High School, our mission is to prepare the next generation of debaters for success.
          </p>
          <p className="text-gray-600 mb-4">
            All of us have qualified to the NSDA National Tournament, and drawing from our own experiences and insights 
            gleaned from upperclassmen, we offer a hands-on approach to developing essential skills in clear, confident, 
            and convincing communication.
          </p>
          <p className="text-gray-600">
            Our camp aims to combat the fear of public speaking and instill unwavering confidence in every participant. 
            We have all been through the process of learning how to be great at speech and debate and will pass what we 
            learned to anybody who attends. Join us as we delve into the heart of debating, providing a supportive 
            environment where young minds flourish.
          </p>
        </div>
      </section>

      {/* Learning Targets */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Learning Targets</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <p className="text-gray-600 mb-4">
            During the course of the week, we hope that students will be able to learn the following learning targets:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Students are able to identify different types of debate</li>
            <li>Students are able to speak clearly and concisely in front of their peers</li>
            <li>Students are able to understand what each subterm of a debate category means (e.g. Cards, Placards, etc.)</li>
            <li>Students are able to debate with other peers in an actual format</li>
            <li>Students are able to apply information learned in a round of debate</li>
          </ul>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Beginner vs Advanced</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-indigo-600">Beginner Camp</h4>
            <p className="text-gray-600 mb-4">
              We HIGHLY recommend that students without prior experience speaking in front of a large crowd or judge sign up for the beginner camp, 
              as students will be taught the key fundamentals as opposed to more specifics in the advanced camp.
            </p>
            <p className="text-gray-600 font-medium">
              Perfect for students who are new to speech and debate or public speaking in general.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-3 text-indigo-600">Advanced Camp</h4>
            <p className="text-gray-600 mb-2">Required/Highly Preferred Skills:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
              <li>Ability to properly create and format a 3 minute speech</li>
              <li>Ability to deliver a speech with 3 key points and link arguments together</li>
              <li>Understanding of basic debate/speech terminology</li>
              <li>Ability to go through a full round of Debate without help</li>
              <li>Effective research skills to find evidence on topics</li>
              <li>Use of hand motions throughout speech</li>
              <li>Apply use of eye contact rather than read off a paper</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Our Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-32 h-32 rounded-full bg-indigo-100 mx-auto mb-4 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-tr from-indigo-400 to-blue-500 flex items-center justify-center text-white font-bold">
                Eric
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">Eric Chen</h3>
            <p className="text-gray-600 mb-4">
              Eric is a rising junior at Cherry Creek High School who has earned the Special distinction rank by the NSDA. 
              He is recognized as a CHSAA State Semifinalist and has qualified for the NSDA National Tournament in two events: 
              Congress and Public Forum.
            </p>
            <p className="text-gray-600">
              In other high-level tournaments, Eric has reached finals several times, including at Winter Wonder (the largest 
              tournament in Colorado), Cheyenne East Holiday Classic (a large multi-state regional competition), and has gone 
              to finals every single time when entered into National Extemporaneous Speaking.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-32 h-32 rounded-full bg-indigo-100 mx-auto mb-4 overflow-hidden">
              <img 
                src="/VivaanPic.jpg" 
                alt="Vivaan Lal" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">Vivaan Lal</h3>
            <p className="text-gray-600 mb-4">
              Vivaan is a rising junior at Cherry Creek High School. He currently holds the Distinction Rank and is a current 
              speech district champion at Cherry Creek High School.
            </p>
            <p className="text-gray-600">
              His accolades include being the champion of the Winter Wonder tournament, a multiple-time tournament finalist, 
              as well as a state and national qualifier. Vivaan is skilled at presenting information and appealing to an audience.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-32 h-32 rounded-full bg-indigo-100 mx-auto mb-4 overflow-hidden">
              <img 
                src="/FormalPic.jpg" 
                alt="Rishabh Sodani" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">Rishabh Sodani</h3>
            <p className="text-gray-600 mb-4">
              Rishabh is a rising junior at Cherry Creek High School. Rishabh currently has over 575 NSDA points, one of the 
              highest in the Class of 2027, and has earned the Special Distinction Rank.
            </p>
            <p className="text-gray-600">
              Rishabh has also been a finalist in numerous Speech & Debate Competitions, such as Winter Wonder and the 5A State 
              Tournament. Rishabh is an NSDA district finalist in Congress and International Extemp and is a qualifier for 
              nationals in both events. He is also skilled at effective research and speech writing in short amounts of time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Location and Registration */}
      <section className="py-12 bg-indigo-50 rounded-lg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Registration Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">Location & Time</h3>
              <p className="text-gray-700 mb-2"><strong>Where:</strong> Koelbel Library (Arapahoe Libraries)</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> 5955 S Holly St, Centennial, CO 80121</p>
              <p className="text-gray-700 mb-2"><strong>When:</strong> 9AM - 12PM daily</p>
              <p className="text-gray-700 mb-2"><strong>Beginner Camp:</strong> July 14th-18th</p>
              <p className="text-gray-700"><strong>Advanced Camp:</strong> July 21st-25th</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">Cost & Payment</h3>
              <p className="text-gray-700 mb-3">
                Cost for a Full-Week 15 Hour Camp: <strong>$100</strong> (only $6 per hour!)
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Special Discounts:</strong> Returning students and students signing up for both sessions receive a <strong>20% discount</strong> (only $160 for both sessions).
              </p>
              <p className="text-gray-700">
                <strong>Payment Options:</strong> Cash, Venmo, Check, PayPal, or any other convenient option.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link 
              href="/signup"
              className="px-8 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
