require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Allows parsing of JSON requests

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
const stickerRoutes = require("./routes");
app.use("/api", stickerRoutes); // Prefix all routes with /api

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
