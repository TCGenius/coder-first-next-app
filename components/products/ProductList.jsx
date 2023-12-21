import Link from 'next/link'
import ProductCard from './ProductCard'
import { db } from '@/firebase/firebase.config'
import { collection, where, query, getDocs } from 'firebase/firestore'

//I'm not using static params because it doesn't read new products
export default async function ProductList({productCateg}) {
  
    // const data = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${productCateg}`, {cache: 'no-store'})
    // .then(r => r.json())
    // .catch(error => console.log(error)) //fetch items filtered by category from API
    const productsRef = collection(db, 'products') //get 'products' collection from Firebase
    const q = productCateg === 'all' 
    ? productsRef 
    : query(productsRef, where('category', '==', productCateg)) //filter products by category
    const querySnapshot = await getDocs(q) //get every record in the query
    const data = querySnapshot.docs.map(doc => doc.data()) //get every field as an array of objects


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