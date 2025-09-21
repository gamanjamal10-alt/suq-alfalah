import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
export default function App(){
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('/api/products')
      .then(res=>res.json())
      .then(data=>setProducts(data))
      .catch(()=>{})
  },[])
  return (
    <div style={{padding:20}}>
      <h1>🛒 سوق الفلاح</h1>
      <p>Bienvenue / مرحبا بك في نسخة اختبارية</p>
      <ProductList products={products} />
    </div>
  )
}
