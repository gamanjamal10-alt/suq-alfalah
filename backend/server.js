const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/users");
const storeRoutes = require("./routes/stores");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/stores", storeRoutes);

app.get("/", (req, res) => {
  res.json({
    message_fr: "API Suq Alfalah prête 🚀",
    message_ar: "واجهة برمجة تطبيقات سوق الفلاح جاهزة 🚀",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

