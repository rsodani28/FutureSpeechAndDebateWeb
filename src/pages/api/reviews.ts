import { type NextApiRequest, type NextApiResponse } from "next";
import fs from "fs";
import path from "path";

// Define the review type
export type Review = {
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET request to fetch all approved reviews
  if (req.method === "GET") {
    const reviews = readReviewsFromFile();
    // Filter for approved reviews only
    const approvedReviews = reviews.filter(review => review.approved);
    return res.status(200).json(approvedReviews);
  }

  // Handle POST request to create a new review
  if (req.method === "POST") {
    try {
      const { parentName, studentName, rating, comment } = req.body as {
        parentName: string;
        studentName: string;
        rating: number | string;
        comment: string;
      };
      
      // Validate required fields
      if (!parentName || !studentName || !rating || !comment) {
        return res.status(400).json({ error: "All fields are required" });
      }
      
      // Validate comment length
      if (comment.length < 10) {
        return res.status(400).json({ error: "Comment must be at least 10 characters" });
      }
      
      // Create new review
      const newReview: Review = {
        id: Date.now().toString(), // Simple ID generation
        parentName,
        studentName,
        rating: Number(rating),
        comment,
        createdAt: new Date().toISOString(),
        approved: false, // Default to not approved
      };
      
      // Read existing reviews, add the new one, and write back to file
      const reviews = readReviewsFromFile();
      reviews.push(newReview);
      writeReviewsToFile(reviews);
      
      return res.status(201).json(newReview);
    } catch (error) {
      console.error("Error creating review:", error);
      return res.status(500).json({ error: "Failed to create review" });
    }
  }

  // Handle unsupported methods
  return res.status(405).json({ error: "Method not allowed" });
}
