import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CreateStore from "./pages/CreateStore";
import StorePage from "./pages/StorePage";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Header />
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
    </Router>
  );
}

export default App;
