import React from 'react';

const Support = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '30px' }}>
      <div className="card">
        <h2 style={{ textAlign: 'right', marginBottom: '30px' }}>📞 مركز الدعم والمساعدة</h2>
        <div style={{ textAlign: 'right', lineHeight: 1.9 }}>
          <p><strong>📧 البريد الإلكتروني:</strong> support@suq-alfalah.dz</p>
          <p><strong>📞 الهاتف:</strong> +213 12 345 6789</p>
          <p><strong>🕒 ساعات العمل:</strong> من الأحد إلى الخميس — 8:00 صباحًا حتى 6:00 مساءً</p>
          <p><strong>💬 واتساب:</strong> +213 12 345 6789</p>
          <h3 style={{ marginTop: '20px' }}>أسئلة شائعة:</h3>
          <p><strong>كيف أنشئ متجرًا؟</strong><br /> اضغط على "أنشئ متجرك" في الأعلى واملأ النموذج.</p>
          <p><strong>كيف أدفع؟</strong><br /> نقدًا عند الاستلام، أو عبر بريدي موب، أو CCP.</p>
          <p><strong>كيف أتواصل مع البائع؟</strong><br /> كل متجر يعرض معلومات التواصل الخاصة به.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
