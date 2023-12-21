import { Image } from '@nextui-org/react';
import CartAdd from '../utilities/CartAdd';
import { notFound } from 'next/navigation';
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase/firebase.config'

export default async function ProductDetail( { detail } ) {
  // const data = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/detail/${detail}`, {cache: 'no-store'})
  // .then(r => r.json()) //fetch single product from API
  //Commented fetch because it doesn't work on Vercel

  const docRef = doc(db, 'products', detail) //get specific product from Firebase
  const docSnapshot = await getDoc(docRef) //get record as an object
  const data = docSnapshot.data()

  if (!data.slug){
   notFound() //Routes into not-found.js if not data is returned
  }
  return (
    <div className='container flex flex-row md:flex-nowrap flex-wrap h-full rounded-lg gap-4 shadow-md shadow-blue-400 items-center p-4 justify-center bg-white'>
      <div className='flex justify-center md:basis-3/5 basis-full '>
        <Image src={data.img} height={250} alt={data.name} className='max-h-72' />
      </div>
      <div className='flex flex-col items-center md:basis-2/5 basis-full justify-center px-8 py-6 gap-4 border border-blue-200 rounded-md'>
        <h2 className='m-auto text-xl font-bold text-justify border-b-1 border-blue-200 pb-2'>{data.name}</h2>
        <div className='text-xs text-gray-700 border-b-1 border-blue-200 pb-2 description'>{data.description}</div>
        <CartAdd product={data}/>
      </div>
    </div>
  )
}