import RouterButton from '@/components/navigation/RouterButton'
import AdminProductEdit from '@/components/products/admin/AdminProductEdit'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase/firebase.config'

export default async function AdminItemEdit( {params} ) {
  const { slug } = params
  // const data = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/detail/${slug}`, {cache: 'no-store'})
  // .then(r => r.json()) //fetch single product from API
  //Commented fetch because it doesn't work on Vercel

  const docRef = doc(db, 'products', slug) //get specific product from Firebase
  const docSnapshot = await getDoc(docRef) //get record as an object
  const data = docSnapshot.data()

  if (!data.slug){
   notFound() //Routes into not-found.js if not data is returned
  }
  return(
    <>
    <div className='container m-auto p-4'>
        <RouterButton
        navigateTo={'/admin/products/main/all'}>
          Volver
        </RouterButton>
      </div>
    <AdminProductEdit
    itemToEdit={data}/>
    </>
  )
}