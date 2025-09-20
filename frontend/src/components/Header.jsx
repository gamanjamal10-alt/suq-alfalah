import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '15px', background: '#28a745', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <h1>سوق الفلاح</h1>
      <nav>
        <Link to="/" style={linkStyle}>الرئيسية</Link>
        <Link to="/create-store" style={linkStyle}>أنشئ متجرك</Link>
        <Link to="/support" style={linkStyle}>الدعم</Link>
      </nav>
    </header>
  );
};

const linkStyle = {
  margin: '0 10px',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default Header;