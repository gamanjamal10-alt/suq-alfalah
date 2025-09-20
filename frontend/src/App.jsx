import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import StorePage from './pages/StorePage'
import CreateStore from './pages/CreateStore'
import Support from './pages/Support'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/store/:id' element={<StorePage />} />
        <Route path='/create-store' element={<CreateStore />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
