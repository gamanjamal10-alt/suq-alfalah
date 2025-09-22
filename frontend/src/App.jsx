import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateStore from './pages/CreateStore';
import Products from './pages/Products';
import StorePage from './pages/StorePage';
import Support from './pages/Support';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api`)
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(err => setApiMessage('⚠️ لا يمكن الاتصال بالخادم الآن.'));
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <div style={{ padding: '20px', background: '#f8f9fa', textAlign: 'right' }}>
          <h1>🌾 سوق الفلاح</h1>
          <p>منصة إلكترونية لربط الفلاحين بالتجار وشركات النقل في الجزائر.</p>
          <div style={{ margin: '15px 0', padding: '10px', background: '#e8f5e9', borderRadius: '5px' }}>
            <strong>رسالة من الخادم:</strong> {apiMessage}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-store" element={<CreateStore />} />
          <Route path="/store/:id" element={<StorePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
