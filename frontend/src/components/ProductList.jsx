import React from "react";

export default function ProductList({ products }) {
  return (
    <div className="products">
      {products.length === 0 ? (
        <p>⏳ جاري تحميل المنتجات...</p>
      ) : (
        products.map((p) => (
          <div key={p.id} className="product-card">
            <h2>{p.name}</h2>
            <p>{p.price} دج</p>
          </div>
        ))
      )}
    </div>
  );
}
