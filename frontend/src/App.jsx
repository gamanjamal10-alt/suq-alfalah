import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CreateStore from "./pages/CreateStore";
import StorePage from "./pages/StorePage";
import Support from "./pages/Support";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <nav>
        <Link to="/">🏠 الرئيسية</Link> |{" "}
        <Link to="/products">🛒 المنتجات</Link> |{" "}
        <Link to="/create-store">➕ إنشاء متجر</Link> |{" "}
        <Link to="/support">ℹ️ دعم</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/create-store" element={<CreateStore />} />
          <Route path="/store/:id" element={<StorePage />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

