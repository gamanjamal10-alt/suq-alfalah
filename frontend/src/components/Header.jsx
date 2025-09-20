import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>سوق الفلاح</h1>
      <nav>
        <Link to="/">الرئيسية</Link> | 
        <Link to="/create-store">إنشاء متجر</Link> | 
        <Link to="/support">الدعم</Link>
      </nav>
    </header>
  );
}

export default Header;
