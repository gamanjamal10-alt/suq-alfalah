# Suq-Alfalah

مشروع بسيط: واجهة React (Vite) + Backend Flask.
API base: /api

## تشغيل محلي
1. Backend:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate   # أو venv\Scripts\activate على ويندوز
   pip install -r requirements.txt
   python server.py
   ```

2. Frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## البيئة
- قم بتعديل `frontend/.env` إذا كان API لديك مسار مختلف.
- المشروع مهيأ لاستخدام `VITE_API_URL` (vite) و`REACT_APP_API_URL` (CRA compatibility).
