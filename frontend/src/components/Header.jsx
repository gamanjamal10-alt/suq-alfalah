import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      {/* قسم الترحيب */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "28px", color: "#2e7d32" }}>
          مرحباً بكم في <span style={{ color: "#4caf50" }}>سوق الفلاح</span>
        </h2>
        <p style={{ fontSize: "18px", color: "#555" }}>
          منصة رقمية تجمع بين الفلاحين والتجار والزبائن في مكان واحد.
        </p>
        <Link to="/products">
          <button
            style={{
              marginTop: "20px",
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "12px 24px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            🛒 تسوق الآن
          </button>
        </Link>
      </section>

      {/* قسم المميزات */}
      <section style={{ marginBottom: "40px" }}>
        <h3 style={{ color: "#2e7d32" }}>✨ مميزات سوق الفلاح</h3>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "16px" }}>
          <li>✅ شراء مباشر من الفلاح دون وسطاء</li>
          <li>✅ أسعار تنافسية وجودة مضمونة</li>
          <li>✅ إمكانية إنشاء متجرك الخاص</li>
          <li>✅ دعم فني متواصل</li>
        </ul>
      </section>

      {/* قسم الدعوة */}
      <section style={{ backgroundColor: "#f1f8e9", padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ color: "#388e3c" }}>📢 هل أنت فلاح أو تاجر؟</h3>
        <p>
          يمكنك الآن الانضمام إلى المنصة وإنشاء متجرك الإلكتروني بكل سهولة.
        </p>
        <Link to="/create-store">
          <button
            style={{
              marginTop: "10px",
              backgroundColor: "#388e3c",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            ➕ أنشئ متجرك
          </button>
        </Link>
      </section>
    </div>
  )
}

export default Home
