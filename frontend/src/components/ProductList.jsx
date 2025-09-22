import React from "react";

function Navbar({ lang, setLang }) {
  return (
    <div className="navbar">
      <span>{lang === "ar" ? "🌾 سوق الفلاح" : "🌾 Suq Alfalah"}</span>
      <button onClick={() => setLang(lang === "ar" ? "fr" : "ar")}>
        {lang === "ar" ? "Français" : "العربية"}
      </button>
    </div>
  );
}

export default Navbar;
