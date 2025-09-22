import { useEffect, useState } from "react";

function App() {
  const [stores, setStores] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  // 🔹 جلب المتاجر من الـ API
  useEffect(() => {
    fetch("https://suq-alfalah.onrender.com/api/stores")
      .then((res) => res.json())
      .then((data) => setStores(data))
      .catch((err) => console.error("خطأ في جلب المتاجر:", err));
  }, []);

  // 🔹 تسجيل متجر جديد
  const addStore = async (e) => {
    e.preventDefault();

    const newStore = { name, type };

    try {
      const res = await fetch("https://suq-alfalah.onrender.com/api/stores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStore),
      });

      if (res.ok) {
        const savedStore = await res.json();
        setStores([...stores, savedStore]); // تحديث القائمة
        setName("");
        setType("");
      } else {
        console.error("فشل في إضافة المتجر");
      }
    } catch (err) {
      console.error("خطأ:", err);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>🛒 سوق الفلاح</h1>

      {/* 🟢 عرض المتاجر */}
      <h2>قائمة المتاجر</h2>
      <ul>
        {stores.map((store, index) => (
          <li key={index}>
            {store.name} - {store.type}
          </li>
        ))}
      </ul>

      {/* 🟢 إضافة متجر جديد */}
      <h2>إضافة متجر جديد</h2>
      <form onSubmit={addStore}>
        <input
          type="text"
          placeholder="اسم المتجر"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="نوع المتجر"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <button type="submit">إضافة</button>
      </form>
    </div>
  );
}

export default App;
