import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://suq-alfalah.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <ProductList products={products} />
    </>
  );
}

export default App;


