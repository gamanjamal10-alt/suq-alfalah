// serveur Express minimal — Backend (Fr/Ar)
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);
let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('suqAlFalah');
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err);
  }
}

// Route principale / رسالة ترحيب
app.get('/', (req, res) => {
  res.json({ message_fr: 'API Suq Alfalah prête 🚀', message_ar: 'واجهة برمجة تطبيقات سوق الفلاح جاهزة 🚀' });
});

// Ajouter un produit / إضافة منتج
app.post('/products', async (req, res) => {
  try {
    const product = req.body;
    const result = await db.collection('products').insertOne(product);
    res.json({ insertedId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: 'Error inserting product' });
  }
});

// Lister les produits / جلب المنتجات
app.get('/products', async (req, res) => {
  try {
    const products = await db.collection('products').find().toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  connectDB();
});
