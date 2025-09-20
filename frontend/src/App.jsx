import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";

function Home() {
  return (
    <div>
      <h2>Welcome to Suq Al-Falah</h2>
      <p>منصة للتسوق من الفلاح مباشرة.</p>
      <nav>
        <Link to="/products">عرض المنتجات</Link>
      </nav>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Suq Al-Falah</h2>
      <p>هذه المنصة مخصصة لربط الفلاحين مباشرة بالمستهلك.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <h1>Suq Al-Falah</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "10px" }}>🏠 Home</Link>
          <Link to="/products" style={{ marginRight: "10px" }}>🛒 Products</Link>
          <Link to="/about">ℹ️ About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
