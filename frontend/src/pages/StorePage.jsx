import React from 'react';
import { useParams, Link } from 'react-router-dom';

const StorePage = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: '20px' }}>
      <h2>صفحة المتجر رقم {id}</h2>
      <Link to={`/store/${id}/products`}>عرض المنتجات</Link>
    </div>
  );
};

export default StorePage;