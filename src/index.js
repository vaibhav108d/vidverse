import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("✅ Connected to MongoDB");

    app.on("error", (err) => {
      console.error("❌ Express App Error:", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup Error:", err);
  }
})();
