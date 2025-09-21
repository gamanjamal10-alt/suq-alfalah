export default function ProductList({ products }){
  if(!products || products.length === 0) return <p>⏳ لا توجد منتجات بعد / Aucune produit pour le moment</p>
  return (
    <ul>
      {products.map(p => (
        <li key={p._id}><strong>{p.name}</strong> — {p.price} DA</li>
      ))}
    </ul>
  )
}
