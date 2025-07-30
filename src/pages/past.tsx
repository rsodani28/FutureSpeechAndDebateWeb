import Link from "next/link";
import Head from "next/head";

export default function Past() {
  // Define curriculum data
  const beginnerCurriculum = [
    {
      day: "Monday",
      title: "Introduction to Speaking (Interp, All Speech)",
      topics: [
        "Speaking 101: Basics, Ground Rules, etc.",
        "How can we use Speech on a day-to-day basis?"
      ]
    },
    {
      day: "Tuesday",
      title: "Speech Creation, Delivery, Fast Thinking (Impromptu, Extemp)",
      topics: [
        "Practice creating a speech in a short amount of time",
        "Delivering speeches to an audience"
      ]
    },
    {
      day: "Wednesday",
      title: "Congress Masterclass, Appealing Arguments (Congress)",
      topics: [
        "Congress 101: Dockets, Time, Precedence, Decorum"
      ]
    },
    {
      day: "Thursday",
      title: "Introduction to Debating, Morals (PF, LD)",
      topics: [
        "What is a value?",
        "Is my moral more important than yours?"
      ]
    },
    {
      day: "Friday",
      title: "Practice Debates (PF, LD)",
      topics: [
        "Students may choose a desired event and debate against peers"
      ]
    }
  ];

  const advancedCurriculum = [
    {
      day: "Monday",
      title: "Speaking & Delivery Masterclass (All Speech)",
      topics: [
        "Learning from top speakers",
        "Analyze effective speaker strategies"
      ]
    },
    {
      day: "Tuesday",
      title: "Appealing to the Audience (All events)",
      topics: [
        "Understanding ethos, pathos, and logos",
        "How to move your audience?"
      ]
    },
    {
      day: "Wednesday",
      title: "How to Research & Craft a Meaningful Argument (All Debate)",
      topics: [
        "What is a Credible Source?",
        "How can AI be used to streamline effective research?",
        "How can we make data work for us?"
      ]
    },
    {
      day: "Thursday",
      title: "How to Market Yourself (All events)",
      topics: [
        "Does it matter whether we wear a T-shirt or a suit?",
        "How to project confidence?",
        "How can we fill a space?"
      ]
    },
    {
      day: "Friday",
      title: "Scrimmage and Practices (All events)",
      topics: [
        "Show what you learned and what you know!!"
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      <Head>
        <title>Curriculum - Future Speech & Debate Camp</title>
      </Head>
      {/* Curriculum Hero */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Our Curriculum</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore our comprehensive curriculum for both beginner and advanced camps.
          </p>
          <p className="mt-4 text-indigo-600 font-medium">
            Yes, there WILL be breaks & snacks!!
          </p>
        </div>
      </section>

      {/* Beginner Curriculum */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Beginner Camp Curriculum</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="text-gray-600 mb-6">
            The beginner camp is perfect for students who are new to speech and debate. 
            The curriculum focuses on building a solid foundation in public speaking and debate skills.
          </p>
          
          <div className="space-y-6">
            {beginnerCurriculum.map((day, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
                <h3 className="text-xl font-bold text-gray-900">{day.day} - {day.title}</h3>
                <ul className="mt-2 space-y-1">
                  {day.topics.map((topic, i) => (
                    <li key={i} className="text-gray-600">• {topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Advanced Curriculum */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Advanced Camp Curriculum</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-2 font-medium">
            In the Advanced Camp students will be speaking and will be provided with feedback daily.
          </p>
          
          <div className="space-y-6 mt-6">
            {advancedCurriculum.map((day, index) => (
              <div key={index} className="border-l-4 border-indigo-500 pl-4 py-2">
                <h3 className="text-xl font-bold text-gray-900">{day.day} - {day.title}</h3>
                <ul className="mt-2 space-y-1">
                  {day.topics.map((topic, i) => (
                    <li key={i} className="text-gray-600">• {topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Mission</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4 leading-relaxed">
              We started this summer camp to help prepare the next generation of future speech & debaters get ready when it&apos;s their time to compete. 
              Throughout this past year, we have learned many tips and tricks for all forms of debate and have gathered lots of advice given from upperclassmen.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Speaking clearly, confidently, and convincingly may not be a natural trait, but it is a trait that everyone, young and old, are able to learn. 
              Throughout this camp, your kid will be able to speak more clearly, and we hope to combat the fear of speaking in front of people, to be able to speak to anyone with confidence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide HANDS-ON EXPERIENCE using a Nationals Debate Curriculum, to get your kid into the groove of what debating really feels like.
            </p>
          </div>
        </div>
      </section>

      {/* Age Groups & Approach */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Teaching Approach</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Information Regarding Age Groups</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              From past camp experience: Age is not a factor that comes in for speaking or debating. Therefore, students will be kept in a large group, 
              however, receiving personalized attention from each one of our instructors. If a student needs help or is not getting the information taught, 
              a camp instructor will personally tutor she/he through the lesson.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In the past when needed we have given some students harder questions and extra work, we adjust the level of the camp as needed and 
              spend significant 1 on 1 time with students during work time.
            </p>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Join Us?</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Sign up for our Speech & Debate Camp today and help your child develop crucial communication skills.
        </p>
        <div className="flex justify-center">
          <Link 
            href="/signup"
            className="px-8 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}
