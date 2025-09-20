import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/stores/${id}/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [id]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>منتجات المتجر</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;