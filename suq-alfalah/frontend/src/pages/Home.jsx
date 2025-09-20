import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/stores`)
      .then(res => res.json())
      .then(data => setStores(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <h1 style={{ textAlign: 'center', margin: '30px 0' }}>🌾 مرحبًا بكم في سوق الفلاح!</h1>
      <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '40px' }}>
        منصة تجمع بين الفلاحين، التجار، وشركات النقل — كل في متجره الخاص.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Link to="/create-store" className="btn btn-primary">
          🛒 أنشئ متجرك الآن
        </Link>
      </div>

      <h2 style={{ textAlign: 'right', marginBottom: '30px' }}>المتاجر المتوفرة:</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
        {stores.map(store => (
          <Link to={`/store/${store.id}`} key={store.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card store-card" style={{ textAlign: 'right' }}>
              <h3>{store.name}</h3>
              <p><strong>النوع:</strong> {store.type}</p>
              <p><strong>عدد المنتجات:</strong> {store.products || 'خدمات نقل'}</p>
              <p><strong>التقييم:</strong> ⭐ {store.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
