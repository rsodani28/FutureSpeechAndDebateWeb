import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import Head from "next/head";

import Layout from "~/components/Layout";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={geist.className}>
        <Head>
          <title>Future Speech & Debate Camp</title>
          <meta name="description" content="Learn speech and debate skills at our summer camp for students. Beginner and advanced programs available." />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#4f46e5" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
