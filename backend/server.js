import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// اتصال بقاعدة البيانات
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ اتصال ناجح بقاعدة البيانات'))
  .catch(err => {
    console.error('❌ خطأ في الاتصال:', err.message);
    process.exit(1);
  });

// صفحة رئيسية للتجربة
app.get('/', (req, res) => {
  res.json({ message: "🚀 سوق الفلاح — السيرفر شغال!" });
});

// صفحة المنتجات — بيانات وهمية مؤقتًا
app.get('/api/products', (req, res) => {
  res.json([
    {
      _id: "1",
      name: "طماطم عضوية",
      description: "طازجة من المزرعة",
      price: 150,
      store: { name: "مزرعة الخير" }
    },
    {
      _id: "2",
      name: "بطاطا محلية",
      description: "ممتازة للطبخ",
      price: 90,
      store: { name: "مزرعة البركة" }
    }
  ]);
});

// تشغيل السيرفر
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ السيرفر شغال على المنفذ ${PORT}`);
});
