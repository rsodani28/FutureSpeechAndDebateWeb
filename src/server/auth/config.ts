import { type DefaultSession, type NextAuthConfig } from "next-auth";
// Import providers and adapter commented out for initial deployment
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import DiscordProvider from "next-auth/providers/discord";
// import { db } from "~/server/db";
// import { env } from "~/env";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  // Use an empty providers array for initial deployment
  providers: [],
  
  // We're completely disabling the adapter for initial deployment
  // adapter: PrismaAdapter(db),
  // Simple callbacks setup for initial deployment
  callbacks: {
    // Simplified session callback that doesn't rely on database
    session: ({ session }) => ({
      ...session,
      user: {
        ...session.user,
        // Use a placeholder ID since we don't have a real user
        id: session.user?.email || "anonymous",
      },
    }),
  },
  
  // Add this for deployment to ensure pages don't require authentication
  pages: {
    signIn: "/auth/signin",
  },
} satisfies NextAuthConfig;
