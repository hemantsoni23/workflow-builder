import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";
import { sequelize } from "./config/db.js";
import { User, Post } from "./entities/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Specify the frontend origin
    credentials: true, // Allow cookies & authorization headers
  })
);
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

const startServer = async () => {
  try {
    console.log("✅ Connecting to Database...");
    await connectDB(); // Ensure DB connection is established first

    console.log("✅ Synchronizing database...");
    await sequelize.sync({ alter: true }); // Sync database
    console.log("✅ Database synchronized!");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Error starting server:", error.message);
  }
};

startServer();
