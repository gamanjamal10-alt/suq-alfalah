import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    // محاكاة جلب المتاجر من الـ API
    const mockStores = [
      { id: 1, name: "مزرعة الخير", type: "فلاح", products: 24, rating: 4.8 },
      { id: 2, name: "تاجر الجملة أحمد", type: "جملة", products: 89, rating: 4.6 },
      { id: 3, name: "محل التجزئة - وهران", type: "تجزئة", products: 56, rating: 4.9 },
      { id: 4, name: "نقل سريع - الجزائر", type: "نقل", products: 0, rating: 4.7 },
    ];
    setStores(mockStores);
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', margin: '30px 0' }}>🌾 مرحبًا بكم في سوق الفلاح!</h1>
      <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '40px' }}>
        منصة تجمع بين الفلاحين، التجار، وشركات النقل — كل في متجره الخاص.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Link 
          to="/create-store"
          style={{
            padding: '15px 30px',
            background: '#28a745',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          🛒 أنشئ متجرك الآن
        </Link>
      </div>

      <h2 style={{ textAlign: 'right', marginBottom: '30px' }}>المتاجر المتوفرة:</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
        {stores.map(store => (
          <Link to={`/store/${store.id}`} key={store.id} style={storeCardLink}>
            <div style={storeCard}>
              <h3>{store.name}</h3>
              <p><strong>النوع:</strong> {store.type === 'فلاح' ? '👨‍🌾 فلاح' : store.type === 'جملة' ? '🏬 تاجر جملة' : store.type === 'تجزئة' ? '🛒 تاجر تجزئة' : '🚚 نقل'}</p>
              <p><strong>عدد المنتجات:</strong> {store.products || 'خدمات نقل'}</p>
              <p><strong>التقييم:</strong> ⭐ {store.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const storeCardLink = {
  textDecoration: 'none'
};

const storeCard = {
  padding: '25px',
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
  textAlign: 'right',
  transition: 'transform 0.2s',
  border: '1px solid #eee'
};

storeCard[':hover'] = {
  transform: 'translateY(-5px)',
  boxShadow: '0 5px 20px rgba(0,0,0,0.15)'
};

export default Home;
