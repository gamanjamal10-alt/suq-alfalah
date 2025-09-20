import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const StorePage = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/stores/${id}`)
      .then(res => res.json())
      .then(data => setStore(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!store) return <p style={{ textAlign:'center' }}>⏳ جارٍ تحميل بيانات المتجر...</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <div style={{ borderBottom: '3px solid #28a745', paddingBottom:15, marginBottom:20 }}>
        <h1>{store.name}</h1>
        <p>⭐ {store.rating} | {store.type}</p>
      </div>
      <p style={{ textAlign:'right', fontSize:18 }}>{store.description}</p>
      <p style={{ textAlign:'right' }}><strong>📞 للتواصل:</strong> {store.contact}</p>
      <div style={{ marginTop:30, textAlign:'center' }}>
        <Link to={`/store/${id}/products`} className="btn btn-primary">🛍️ عرض المنتجات</Link>
      </div>
    </div>
  );
};

export default StorePage;
