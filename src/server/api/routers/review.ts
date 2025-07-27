import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import fs from "fs";
import path from "path";

// Define the Review type
type Review = {
  id: string;
  parentName: string;
  studentName: string;
  rating: number;
  comment: string;
  createdAt: string;
  approved: boolean;
};

// Path to the reviews file
const reviewsFilePath = path.join(process.cwd(), "data", "reviews.json");

// Helper function to ensure the data directory exists
function ensureDataDirectoryExists() {
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Helper function to read reviews from the file
function readReviewsFromFile(): Review[] {
  ensureDataDirectoryExists();
  
  try {
    if (!fs.existsSync(reviewsFilePath)) {
      // If the file doesn't exist, create it with an empty array
      fs.writeFileSync(reviewsFilePath, JSON.stringify([], null, 2), "utf8");
      return [];
    }
    
    const fileContent = fs.readFileSync(reviewsFilePath, "utf8");
    return JSON.parse(fileContent) as Review[];
  } catch (error) {
    console.error("Error reading reviews file:", error);
    return [];
  }
}

// Helper function to write reviews to the file
function writeReviewsToFile(reviews: Review[]) {
  ensureDataDirectoryExists();
  
  try {
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing reviews file:", error);
  }
}

export const reviewRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => {
    const reviews = readReviewsFromFile();
    // Filter for approved reviews only and sort by date (newest first)
    return reviews
      .filter(review => review.approved)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }),

  create: publicProcedure
    .input(
      z.object({
        parentName: z.string().min(1, "Parent name is required"),
        studentName: z.string().min(1, "Student name is required"),
        rating: z.number().min(1).max(5),
        comment: z.string().min(10, "Please provide a comment with at least 10 characters"),
      }),
    )
    .mutation(({ input }) => {
      // Create new review
      const newReview: Review = {
        id: Date.now().toString(), // Simple ID generation
        parentName: input.parentName,
        studentName: input.studentName,
        rating: input.rating,
        comment: input.comment,
        createdAt: new Date().toISOString(),
        approved: false, // Default to not approved
      };
      
      // Read existing reviews, add the new one, and write back to file
      const reviews = readReviewsFromFile();
      reviews.push(newReview);
      writeReviewsToFile(reviews);
      
      return newReview;
    }),
});
