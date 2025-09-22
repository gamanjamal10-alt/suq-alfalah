// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('https://api.suq-alfalah.com/api/products')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("فشل في جلب المنتجات:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <p>{t('loading')}</p>
    </div>
  );

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#004d40' }}>
        {t('products')}
      </h2>
      {products.length === 0 ? (
        <p style={{ textAlign: 'center' }}>{t('no_products')}</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {products.map(product => (
            <div
              key={product._id}
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                background: '#fff',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{product.name}</h3>
              <p style={{ color: '#666', fontSize: '0.95rem', margin: '0 0 1rem 0' }}>
                {product.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{ color: '#d32f2f', fontSize: '1.2rem' }}>
                  {product.price} د.ج
                </strong>
                {product.store?.name && (
                  <span style={{
                    background: '#e8f5e9',
                    color: '#2e7d32',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem'
                  }}>
                    {product.store.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
