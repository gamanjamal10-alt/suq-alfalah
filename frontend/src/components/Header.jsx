import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">الرئيسية</Link>
        <Link to="/products">المنتجات</Link>
        <Link to="/create-store">إنشاء متجر</Link>
        <Link to="/support">الدعم</Link>
      </nav>
    </header>
  );
}

export default Header;
