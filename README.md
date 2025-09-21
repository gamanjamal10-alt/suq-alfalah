# Suq Alfalah — Projet / مشروع (Fr / Ar)

هذا مشروع تجريبي متكامل (Backend Node.js + Frontend React) متصل بـ MongoDB Atlas.
Ceci est un projet d'exemple complet (Backend Node.js + Frontend React) connecté à MongoDB Atlas.

## كيف تبدأ / Comment démarrer

### Backend (الخلفية)
1. اذهب إلى `backend/`
2. قم بإنشاء ملف `.env` بناءً على `.env.example` واملأ MONGODB_URI.
   ```env
   MONGODB_URI="mongodb+srv://<USER>:<PASSWORD>@cluster0.xxxxx.mongodb.net/suqalfalah?retryWrites=true&w=majority"
   PORT=5000
   ```
3. تثبيت الحزم وتشغيل الخادم:
   ```bash
   cd backend
   npm install
   npm start
   ```

### Frontend (الواجهة)
1. اذهب إلى `frontend/`
2. تثبيت الحزم وتشغيل الواجهة:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
3. الواجهة تستخدم proxy إلى `http://localhost:5000` للمسارات `/api`.

## نشر / Déploiement
- Backend: Render (Web Service Node)
- Frontend: Vercel (Static Site)

## ملاحظات أمنية / Remarques sécurité
- لا ترفع `.env` إلى GitHub.
- استعمل متغيرات البيئة في Render/Vercel بدلاً من تضمين الـ URI في الكود.
