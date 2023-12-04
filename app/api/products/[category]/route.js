import { NextResponse } from 'next/server';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/firebase.config';



export async function GET (_, { params }) {
  const { category } = params //get category from params
  const productsRef = collection(db, 'products') //get 'products' collection from Firebase
  const q = category === 'all' 
  ? productsRef 
  : query(productsRef, where('category', '==', category)) //filter products by category
  const querySnapshot = await getDocs(q) //get every record in the query
  const docs = querySnapshot.docs.map(doc => doc.data()) //get every field as an array of objects
    
  return NextResponse.json(docs) //return the response as json
}