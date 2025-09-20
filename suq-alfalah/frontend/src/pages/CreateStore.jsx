import React, { useState } from 'react';

const CreateStore = () => {
  const [form, setForm] = useState({
    name: '',
    type: '',
    description: '',
    image: null
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('جاري الإرسال...');
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('type', form.type);
      fd.append('description', form.description);
      if (form.image) fd.append('image', form.image);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/stores`, {
        method: 'POST',
        body: fd
      });
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setStatus('✅ تم إنشاء المتجر بنجاح');
      setForm({ name:'', type:'', description:'', image:null });
    } catch (err) {
      console.error(err);
      setStatus('❌ حدث خطأ أثناء إنشاء المتجر');
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '30px' }}>
      <div className="card">
        <h2 style={{ textAlign: 'right', marginBottom: '20px' }}>أنشئ متجرك في سوق الفلاح</h2>
        <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:15 }}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="اسم المتجر" style={{padding:12, borderRadius:8}} required />
          <select name="type" value={form.type} onChange={handleChange} style={{padding:12, borderRadius:8}} required>
            <option value="">اختر نوع المتجر</option>
            <option value="فلاح">👨‍🌾 فلاح</option>
            <option value="جملة">🏬 تاجر جملة</option>
            <option value="تجزئة">🛒 تاجر تجزئة</option>
            <option value="نقل">🚚 شركة/سائق نقل</option>
          </select>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="وصف المتجر" rows="4" style={{padding:12, borderRadius:8}} />
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
          <button className="btn btn-primary" type="submit">إنشاء المتجر</button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
