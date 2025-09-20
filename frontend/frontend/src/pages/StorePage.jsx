import React from 'react';
import { useParams, Link } from 'react-router-dom';

const StorePage = () => {
  const { id } = useParams();
  const store = {
    id: id,
    name: "مزرعة الخير",
    type: "فلاح",
    description: "نقدم أفضل المنتجات الزراعية الطازجة من قلب الأرض.",
    rating: 4.8,
    contact: "+213 12 345 6789"
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '30px' }}>
      <div style={storeHeader}>
        <h1>{store.name}</h1>
        <p>⭐ {store.rating} | {store.type === 'فلاح' ? '👨‍🌾 فلاح' : store.type === 'جملة' ? '🏬 تاجر جملة' : store.type === 'تجزئة' ? '🛒 تاجر تجزئة' : '🚚 نقل'}</p>
      </div>
      <p style={{ textAlign: 'right', fontSize: '18px', margin: '20px 0' }}>{store.description}</p>
      <p style={{ textAlign: 'right' }}><strong>📞 للتواصل:</strong> {store.contact}</p>
      
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to={`/store/${id}/products`} style={btnPrimary}>
          🛍️ عرض المنتجات
        </Link>
      </div>
    </div>
  );
};

const storeHeader = {
  borderBottom: '3px solid #28a745',
  paddingBottom: '15px',
  marginBottom: '30px',
  textAlign: 'right'
};

const btnPrimary = {
  padding: '15px 30px',
  backgroundColor: '#28a745',
  color: 'white',
  borderRadius: '8px',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  display: 'inline-block'
};

export default StorePage;
