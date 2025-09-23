import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>قائمة المنتجات</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} - {p.price} دج</li>
        ))}
      </ul>
    </div>
  );
}
