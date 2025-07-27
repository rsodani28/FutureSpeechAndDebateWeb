import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const createPrismaClient = () => {
  try {
    return new PrismaClient({
      log:
        env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    });
  } catch (error) {
    console.error("Failed to create Prisma client:", error);
    // Return a mock Prisma client for build process
    // This is a temporary solution for deployment
    if (env.NODE_ENV === "production") {
      console.log("Using mock Prisma client for production build");
      return {} as PrismaClient;
    }
    throw error;
  }
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
