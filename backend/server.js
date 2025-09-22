// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  });

// Test Route
app.get('/', (req, res) => {
  res.json({ message: "🚀 Suq Alfalah API is running!" });
});

// Products Route
app.get('/api/products', (req, res) => {
  res.json([
    {
      _id: "1",
      name: "طماطم عضوية",
      description: "طازجة من المزرعة",
      price: 150,
      store: { name: "مزرعة الخير" }
    }
  ]);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
