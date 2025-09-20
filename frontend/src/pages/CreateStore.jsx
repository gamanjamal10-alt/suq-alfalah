import React from 'react';

const CreateStore = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '30px', background: '#fff', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'right', marginBottom: '30px' }}>أنشئ متجرك في سوق الفلاح</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input type="text" placeholder="اسم المتجر" style={inputStyle} required />
        <select style={inputStyle} required>
          <option value="">اختر نوع المتجر</option>
          <option value="فلاح">👨‍🌾 فلاح</option>
          <option value="جملة">🏬 تاجر جملة</option>
          <option value="تجزئة">🛒 تاجر تجزئة</option>
          <option value="نقل">🚚 شركة/سائق نقل</option>
        </select>
        <textarea placeholder="وصف المتجر أو الخدمات المقدمة" rows="4" style={inputStyle}></textarea>
        <input type="file" accept="image/*" style={{ border: 'none', textAlign: 'right' }} />
        <button type="submit" style={btnPrimary}>إنشاء المتجر</button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '16px',
  textAlign: 'right'
};

const btnPrimary = {
  padding: '15px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  marginTop: '10px'
};

export default CreateStore;
