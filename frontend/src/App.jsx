import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import StoreForm from "./components/StoreForm";

function App() {
  return (
    <div>
      <Navbar />
      <h1>🚀 سوق الفلاح</h1>
      <ProductList />
      <StoreForm />
    </div>
  );
}

export default App;
