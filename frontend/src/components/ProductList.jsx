import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://suq-alfalah.onrender.com/api/stores")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((p) => (
          <div className="product-card" key={p.id}>
            <h3>{p.name}</h3>
            <p>🛒 نوع: {p.type}</p>
            <p>📦 منتجات: {p.products}</p>
          </div>
        ))
      ) : (
        <p>⏳ جاري تحميل المتاجر...</p>
      )}
    </div>
  );
}
