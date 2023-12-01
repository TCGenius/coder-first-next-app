import Link from 'next/link'
import ProductCard from './ProductCard'

export default async function ProductList({productCateg}) {
  const data = await fetch(`http://localhost:3000/api/products/${productCateg}`, {cache: 'no-store'})
  .then(r => r.json()) //fetch items filtered by category from API


  return(
    
    <div className='flex flex-row flex-wrap gap-6 md:mx-auto m-auto my-4 md:justify-start justify-center bg-inherit h-full'>
      {data.map(item => (
        <Link 
        key={item.id} 
        href={`/detail/${item.id}`} >
          <ProductCard 
          product={item}/>
        </Link>
      )) }
    </div>
  )
}