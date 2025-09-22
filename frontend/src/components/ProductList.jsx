import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList({ lang }) {
  const [products, setProducts] = useState([]);

  const t = {
    ar: { title: "المنتجات", loading: "جاري التحميل..." },
    fr: { title: "Produits", loading: "Chargement..." }
  };

  useEffect(() => {
    axios
      .get("https://suq-alfalah.onrender.com/api/stores")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>{t[lang].title}</h3>
      {products.length === 0 ? (
        <p>{t[lang].loading}</p>
      ) : (
        <ul>
          {products.map((store) => (
            <li key={store.id}>
              {store.name} ({store.type}) - {store.products} items
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
