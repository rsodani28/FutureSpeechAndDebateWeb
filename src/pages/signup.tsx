import Head from "next/head";

export default function Signup() {
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
            <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                src="https://docs.google.com/document/d/1rgxKEX29-_PK9Oj3QK7k3xB_wnOzvV3aFOrvJmZk7_Q/preview"
                width="100%"
                height="900"
                className="border-0"
                title="Camp Registration Details"
                allow="autoplay"
              />
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
