import AdminProductItem from './AdminProductItem'
import { db } from '@/firebase/firebase.config'
import { collection, where, query, getDocs } from 'firebase/firestore'

export default async function AdminProductList ( {productCateg} ) {

  const productsRef = collection(db, 'products') //get 'products' collection from Firebase
  const q = productCateg === 'all' 
  ? productsRef 
  : query(productsRef, where('category', '==', productCateg)) //filter products by category
  const querySnapshot = await getDocs(q) //get every record in the query
  const data = querySnapshot.docs.map(doc => doc.data()) //get every field as an array of objects
  
  // const data = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${productCateg}`, {cache: 'no-store'})
  // .then(r => r.json()) //fetch items filtered by category from API
  //Commented fetch because it doesn't work on Vercel

  return(
    <div className='container flex flex-col gap-2 p-4 m-auto'>
      {data.map(item => (
          <AdminProductItem 
          key={item.slug}
          product={item}/>
      ))}
    </div>
  )

}