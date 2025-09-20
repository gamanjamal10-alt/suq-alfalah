import React from 'react';

const CreateStore = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>إنشاء متجر جديد</h2>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <input type="text" placeholder="اسم المتجر" style={inputStyle} />
        <input type="text" placeholder="نوع المتجر" style={inputStyle} />
        <button type="submit" style={btnStyle}>إنشاء</button>
      </form>
    </div>
  );
};

const inputStyle = { margin: '10px 0', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' };
const btnStyle = { padding: '10px', border: 'none', borderRadius: '5px', background: '#28a745', color: 'white' };

export default CreateStore;