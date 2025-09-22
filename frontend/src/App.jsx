import { useEffect, useState } from "react";

function App() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("ar"); // ar | fr
  const [newStore, setNewStore] = useState("");

  // تحميل المتاجر من الـ API
  useEffect(() => {
    fetch("https://suq-alfalah.onrender.com/api/stores")
      .then((res) => res.json())
      .then((data) => {
        setStores(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطأ في جلب المتاجر:", err);
        setLoading(false);
      });
  }, []);

  // إضافة متجر جديد
  const handleAddStore = async () => {
    if (!newStore) return;

    try {
      const res = await fetch("https://suq-alfalah.onrender.com/api/stores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newStore, type: "فلاح", products: 0 }),
      });

      const data = await res.json();
      setStores([...stores, data]);
      setNewStore("");
    } catch (error) {
      console.error("خطأ في إضافة المتجر:", error);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Navbar */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#28a745",
          padding: "10px 20px",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        <h2>{language === "ar" ? "🛒 سوق الفلاح" : "🛒 Marché du Fellah"}</h2>
        <div>
          <button onClick={() => setLanguage("ar")} style={{ marginRight: "10px" }}>
            العربية
          </button>
          <button onClick={() => setLanguage("fr")}>Français</button>
        </div>
      </header>

      {/* إضافة متجر */}
      <section style={{ marginTop: "20px" }}>
        <h3>{language === "ar" ? "➕ أضف متجرك" : "➕ Ajouter votre magasin"}</h3>
        <input
          type="text"
          placeholder={language === "ar" ? "اسم المتجر" : "Nom du magasin"}
          value={newStore}
          onChange={(e) => setNewStore(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={handleAddStore} style={{ padding: "8px 12px" }}>
          {language === "ar" ? "إضافة" : "Ajouter"}
        </button>
      </section>

      {/* عرض المتاجر */}
      <section style={{ marginTop: "30px" }}>
        <h3>{language === "ar" ? "🏬 قائمة المتاجر" : "🏬 Liste des magasins"}</h3>
        {loading ? (
          <p>{language === "ar" ? "⏳ جاري التحميل..." : "⏳ Chargement..."}</p>
        ) : stores.length === 0 ? (
          <p>{language === "ar" ? "لا توجد متاجر" : "Aucun magasin"}</p>
        ) : (
          <ul>
            {stores.map((store) => (
              <li key={store.id || store._id}>
                <b>{store.name}</b> - {language === "ar" ? "منتجات" : "Produits"}:{" "}
                {store.products}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
