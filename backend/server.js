const express = require("express");
const connectDB = require("./db");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
