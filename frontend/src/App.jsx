import React, { useEffect, useState } from 'react';

interface Store {
  _id: string;
  name: string;
  description?: string;
}

function App() {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // استبدل الرابط برابط API الخاص بك
    fetch('https://suq-alfalah-api.vercel.app/api/stores') // ⚠️ غيّر هذا الرابط لرابط API الحقيقي
      .then(res => res.json())
      .then(data => {
        setStores(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("فشل جلب المتاجر:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#2c5530' }}>🌿 سوق الفلاح</h1>
      <h2>المتاجر المتاحة:</h2>

      {loading ? (
        <p>جارٍ التحميل...</p>
      ) : stores.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {stores.map(store => (
            <div key={store._id} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', background: '#f9f9f9' }}>
              <h3>{store.name}</h3>
              <p>{store.description || "لا يوجد وصف"}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>لا توجد متاجر مسجلة بعد.</p>
      )}

      <footer style={{ marginTop: '3rem', color: '#666' }}>
        © 2025 سوق الفلاح — جميع الحقوق محفوظة
      </footer>
    </div>
  );
}

export default App;
