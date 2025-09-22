import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import StoreForm from "./components/StoreForm";

function App() {
  const [lang, setLang] = useState("ar");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <div className="container">
        <h1>{lang === "ar" ? "سوق الفلاح" : "Suq Alfalah"}</h1>
        <StoreForm lang={lang} />
        <ProductList lang={lang} />
      </div>
    </>
  );
}

export default App;
