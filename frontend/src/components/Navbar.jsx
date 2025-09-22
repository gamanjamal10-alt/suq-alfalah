import React from "react";

function Navbar({ lang, setLang }) {
  return (
    <nav className="navbar">
      <h2>Suq Alfalah</h2>
      <div>
        <button onClick={() => setLang("ar")}>🇩🇿 العربية</button>
        <button onClick={() => setLang("fr")}>🇫🇷 Français</button>
      </div>
    </nav>
  );
}

export default Navbar;
