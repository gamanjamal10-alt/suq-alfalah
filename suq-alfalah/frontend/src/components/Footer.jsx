import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <div>
          <h4>سوق الفلاح</h4>
          <p>منصة إلكترونية لربط الفلاحين بالتجار وشركات النقل في الجزائر.</p>
        </div>
        <div>
          <h4>روابط سريعة</h4>
          <Link to="/" style={{ display:'block', color:'#ddd', textDecoration:'none', margin:'5px 0' }}>الرئيسية</Link>
          <Link to="/create-store" style={{ display:'block', color:'#ddd', textDecoration:'none', margin:'5px 0' }}>أنشئ متجرك</Link>
          <Link to="/support" style={{ display:'block', color:'#ddd', textDecoration:'none', margin:'5px 0' }}>الدعم الفني</Link>
        </div>
        <div>
          <h4>طرق الدفع</h4>
          <p>• نقدًا عند الاستلام</p>
          <p>• بريدي موب</p>
          <p>• CCP</p>
        </div>
      </div>
      <div style={{ textAlign:'center', paddingTop:20, borderTop:'1px solid #333', marginTop:20 }}>
        <p>© 2025 سوق الفلاح — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

export default Footer;
