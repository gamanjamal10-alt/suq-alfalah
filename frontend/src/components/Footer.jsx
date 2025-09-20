import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainer}>
        <div>
          <h4>سوق الفلاح</h4>
          <p>منصة إلكترونية لربط الفلاحين بالتجار وشركات النقل في الجزائر.</p>
        </div>
        <div>
          <h4>روابط سريعة</h4>
          <Link to="/" style={footerLink}>الرئيسية</Link>
          <Link to="/create-store" style={footerLink}>أنشئ متجرك</Link>
          <Link to="/support" style={footerLink}>الدعم الفني</Link>
        </div>
        <div>
          <h4>طرق الدفع</h4>
          <p>• نقدًا عند الاستلام</p>
          <p>• بريدي موب</p>
          <p>• CCP</p>
        </div>
      </div>
      <div style={copyright}>
        <p>© 2025 سوق الفلاح — جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: '#1a252f',
  color: 'white',
  padding: '40px 0 20px'
};

const footerContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const footerLink = {
  display: 'block',
  color: '#ddd',
  textDecoration: 'none',
  margin: '5px 0'
};

const copyright = {
  textAlign: 'center',
  paddingTop: '20px',
  borderTop: '1px solid #333',
  marginTop: '20px'
};

export default Footer;
