import { type NextApiRequest, type NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { type Review } from "../reviews";

// Path to the reviews file
const reviewsFilePath = path.join(process.cwd(), "data", "reviews.json");

// Helper function to read reviews from the file
function readReviewsFromFile(): Review[] {
  try {
    if (!fs.existsSync(reviewsFilePath)) {
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
  try {
    // Ensure the directory exists
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing reviews file:", error);
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simple admin check - uses query parameter as a very basic protection mechanism
  // For production, you would implement proper authentication
  const adminKey = req.headers['admin-key'] ?? req.query.adminKey;
  if (adminKey !== process.env.ADMIN_KEY && process.env.NODE_ENV === 'production') {
    return res.status(401).json({ error: "Unauthorized" });
  }
  
  // Handle PUT request to approve or reject a review
  if (req.method === "PUT") {
    try {
      const { id, approved } = req.body as { id: string; approved: boolean };
      
      if (!id) {
        return res.status(400).json({ error: "Review ID is required" });
      }
      
      // Read existing reviews
      const reviews = readReviewsFromFile();
      
      // Find the review to update
      const reviewIndex = reviews.findIndex(review => review.id === id);
      
      if (reviewIndex === -1) {
        return res.status(404).json({ error: "Review not found" });
      }
      
      // Update the review
      const reviewToUpdate = reviews[reviewIndex];
      if (reviewToUpdate) {
        reviewToUpdate.approved = !!approved;
      }
      
      // Write back to file
      writeReviewsToFile(reviews);
      
      return res.status(200).json(reviews[reviewIndex]);
    } catch (error) {
      console.error("Error updating review:", error);
      return res.status(500).json({ error: "Failed to update review" });
    }
  }

  // Handle GET request to fetch all reviews (including unapproved ones)
  if (req.method === "GET") {
    const reviews = readReviewsFromFile();
    return res.status(200).json(reviews);
  }

  // Handle unsupported methods
  return res.status(405).json({ error: "Method not allowed" });
}
