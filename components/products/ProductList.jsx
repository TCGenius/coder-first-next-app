import Link from 'next/link'
import ProductCard from './ProductCard'
import products from '@/data/products';

export default function ProductList({productCateg}) {
  
const filteredproducts = productCateg == 'all' ?
products : products.filter(item => item.category === productCateg);

  return(
    
    <div className='flex flex-row flex-wrap gap-6  md:mx-auto m-auto my-4 md:justify-start justify-center bg-inherit h-full'>
      {filteredproducts.map(item => (
        <Link 
        key={item.id} 
        href={`/detail/${item.name}`} >
          <ProductCard 
          productName={item.name} 
          productImg={item.img} 
          productPrice={item.price}/>
        </Link>
      )) }
    </div>
  )
}