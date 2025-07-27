import { type PropsWithChildren } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Future Speech & Debate Camp</title>
        <meta name="description" content="Summer camp for speech and debate skills taught by accomplished high school students" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-24 px-4">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
        <footer className="mt-16 pb-8 text-center text-gray-500 text-sm">
          <div className="max-w-6xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Future Speech & Debate Camp. All rights reserved.</p>
            <p className="mt-1">Developed by Rishabh Sodani</p>
            <p className="mt-2">Contact us: <a href="mailto:erichonor890@gmail.com" className="text-indigo-600 hover:underline">erichonor890@gmail.com</a>, <a href="mailto:vivaanlal11@gmail.com" className="text-indigo-600 hover:underline">vivaanlal11@gmail.com</a>, <a href="mailto:sodanirishabh@gmail.com" className="text-indigo-600 hover:underline">sodanirishabh@gmail.com</a></p>
            <div className="mt-4">
              <a href="https://forms.gle/7vk4sZSVLRNw44op7" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Sign Up Now</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
