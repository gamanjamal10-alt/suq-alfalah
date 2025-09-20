import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{background:'#2c3e50',padding:'15px 0',color:'white'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:'1200px',margin:'0 auto',padding:'0 20px'}}>
        <Link to='/' style={{fontSize:'24px',fontWeight:'bold',textDecoration:'none',color:'white'}}>
          🌾 سوق الفلاح
        </Link>
        <nav>
          <Link to='/' style={navLink}>الرئيسية</Link>
          <Link to='/create-store' style={navLink}>أنشئ متجرك</Link>
          <Link to='/support' style={navLink}>الدعم</Link>
        </nav>
      </div>
    </header>
  )
}

const navLink = {
  color: 'white',
  margin: '0 15px',
  textDecoration: 'none',
  fontSize: '16px'
}

export default Header
