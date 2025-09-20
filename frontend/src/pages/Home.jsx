import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/stores')
      .then(res => res.json())
      .then(data => setStores(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>المتاجر</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {stores.map(store => (
          <div key={store.id} style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3>{store.name}</h3>
            <p>النوع: {store.type}</p>
            <p>المنتجات: {store.products}</p>
            <p>التقييم: ⭐ {store.rating}</p>
            <Link to={`/store/${store.id}`}>زيارة المتجر</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;