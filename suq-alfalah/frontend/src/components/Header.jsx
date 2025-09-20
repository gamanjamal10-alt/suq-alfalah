import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="inner">
        <NavLink to="/" className="logo">🌾 سوق الفلاح</NavLink>
        <nav>
          <NavLink to="/" style={{ color: 'white', margin: '0 12px', textDecoration: 'none' }}>الرئيسية</NavLink>
          <NavLink to="/create-store" style={{ color: 'white', margin: '0 12px', textDecoration: 'none' }}>أنشئ متجرك</NavLink>
          <NavLink to="/support" style={{ color: 'white', margin: '0 12px', textDecoration: 'none' }}>الدعم</NavLink>
        </nav>
      </div>
    </header>
);
};

export default Header;
