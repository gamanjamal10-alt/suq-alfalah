import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/stores/${id}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'right', marginBottom: '30px' }}>منتجات المتجر</h2>
      {products.length === 0 ? <p style={{ textAlign:'center' }}>لا توجد منتجات حالياً.</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '25px' }}>
          {products.map(product => (
            <div key={product.id} className="card" style={{ textAlign:'center' }}>
              <img src={product.image} alt={product.name} style={{ width:'100%', height:180, objectFit:'cover', borderRadius:8 }} />
              <h3 style={{ marginTop:12 }}>{product.name}</h3>
              <p style={{ fontSize:18, fontWeight:700, color:'#28a745' }}>{product.price}</p>
              <button className="btn btn-secondary" style={{ marginTop:10 }}>أضف للسلة</button>
              <div style={{ marginTop:15, borderTop:'1px solid #eee', paddingTop:12 }}>
                <h4>طرق الدفع:</h4>
                <p>• نقدًا عند الاستلام</p>
                <p>• بريدي موب</p>
                <p>• CCP</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
