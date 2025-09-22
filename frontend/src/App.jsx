// src/App.jsx
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './index.css';

export default function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <ProductList />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        background: '#f5f5f5',
        fontSize: '0.9rem',
        color: '#555'
      }}>
        &copy; {new Date().getFullYear()} Suq Alfalah — سوق الفلاح 🌾
      </footer>
    </div>
  );
}
