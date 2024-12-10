const express = require("express");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

// Load environment variables
dotenv.config();

const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

const app = express();

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "uploads"); // Using relative path

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("Uploads directory created");
}

// Set up multer storage destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the uploadDir variable to store files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Ensure unique filename
  },
});

// Initialize multer upload middleware
const upload = multer({ storage });

// Middleware setup
app.use(cors());

const allowedOrigins = [
  "http://localhost:5173", // For local development
  "https://penguinrandomhouse-submission.vercel.app", // For production
];

// Set up CORS to accept requests from any of the allowed origins
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow request from allowed origin
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the port from the environment variable
const port = process.env.PORT || 3000; // Default to port 3000 if not set in .env

// Use the upload middleware for file handling and userRoute for API logic
app.use("/", upload.single("bookFile"), userRoute);
app.use("/admin", adminRoute); // Use the view-pdf route

// Route for downloading the file
app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename; // Get filename from URL parameters
  const filePath = path.join(uploadDir, filename); // Construct the file path

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    res.download(filePath); // Send the file to the client
  } else {
    res.status(404).send("File not found"); // Handle case where file doesn't exist
  }
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
