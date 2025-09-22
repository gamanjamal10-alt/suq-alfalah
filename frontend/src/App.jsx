import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const [lang, setLang] = useState("ar"); // ar or fr

  const t = {
    ar: {
      welcome: "مرحبا بك في سوق الفلاح",
      products: "قائمة المنتجات"
    },
    fr: {
      welcome: "Bienvenue à Suq Alfalah",
      products: "Liste des produits"
    }
  };

  return (
    <div>
      <Navbar lang={lang} setLang={setLang} />
      <h1 className="title">{t[lang].welcome}</h1>
      <ProductList lang={lang} />
    </div>
  );
}

export default App;

