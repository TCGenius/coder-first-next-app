import Link from 'next/link'
import ProductCard from './ProductCard'

//I'm not using static params because it doesn't read new products
export default async function ProductList({productCateg}) {
  
    const data = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${productCateg}`, {cache: 'no-store'})
    .then(r => r.json())
    .catch(error => console.log(error)) //fetch items filtered by category from API


  return(
    
    <div className='flex flex-row flex-wrap gap-6 md:mx-auto m-auto my-4 md:justify-start justify-center bg-inherit h-full'>
      
      {data.map(item => (
        <Link 
        key={item.slug} 
        href={`/detail/${item.slug}`} >
          <ProductCard 
          product={item}/>
        </Link>
      )) }
    </div>
  )
}