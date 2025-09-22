import React, { useState } from "react";
import axios from "axios";

function StoreForm({ lang }) {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://suq-alfalah.onrender.com/api/stores", {
        name,
        owner,
      });
      alert(lang === "ar" ? "تم تسجيل المتجر ✅" : "Magasin enregistré ✅");
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>{lang === "ar" ? "🛍️ تسجيل متجر" : "🛍️ Enregistrer un magasin"}</h2>
      <input
        type="text"
        placeholder={lang === "ar" ? "اسم المتجر" : "Nom du magasin"}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder={lang === "ar" ? "اسم المالك" : "Nom du propriétaire"}
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        required
      />
      <button type="submit">
        {lang === "ar" ? "تسجيل" : "Enregistrer"}
      </button>
    </form>
  );
}

export default StoreForm;
