import React, { useState } from "react";

export default function StoreForm() {
  const [store, setStore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`تم إضافة المتجر: ${store}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={store}
        onChange={(e) => setStore(e.target.value)}
        placeholder="اسم المتجر"
      />
      <button type="submit">إضافة متجر</button>
    </form>
  );
}
