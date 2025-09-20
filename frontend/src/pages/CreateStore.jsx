import React from 'react';

function CreateStore() {
  return (
    <div>
      <h2>إنشاء متجر جديد</h2>
      <form>
        <input type="text" placeholder="اسم المتجر" />
        <button type="submit">حفظ</button>
      </form>
    </div>
  );
}

export default CreateStore;
