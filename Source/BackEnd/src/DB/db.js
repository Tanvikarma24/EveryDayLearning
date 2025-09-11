const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.mongoDB_URI);
    console.log("✅ MongoDB connection successful");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
