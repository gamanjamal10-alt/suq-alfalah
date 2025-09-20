import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://suq-alfalah-api.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2>Products Page</h2>
      <ul>
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id}>
              {p.name} - ${p.price}
            </li>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
    </div>
  );
}

export default Products;
