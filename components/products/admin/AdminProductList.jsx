import Link from 'next/link'
import AdminProductItem from './adminProductItem'

export default async function AdminProductList ( {productCateg} ) {
  const data = await fetch(`http://localhost:3000/api/products/${productCateg}`, {cache: 'no-store'})
  .then(r => r.json()) //fetch items filtered by category from API

  return(
    <div className='container flex flex-col gap-2 p-4 m-auto'>
      {data.map(item => (
          <AdminProductItem 
          key={item.id}
          product={item}/>
      ))}
    </div>
  )

}