import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList({ lang }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://suq-alfalah.onrender.com/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>{lang === "ar" ? "🛒 المنتجات" : "🛒 Produits"}</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <h3>{p.name}</h3>
            <p>
              {lang === "ar" ? "السعر" : "Prix"}: {p.price} دج
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
