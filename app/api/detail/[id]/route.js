import { NextResponse } from 'next/server';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase.config';

export async function GET (_, { params }) {
  const { id } = params //get id from params
  const docRef = doc(db, 'products', id) //get specific product from Firebase
  const docSnapshot = await getDoc(docRef) //get record as an object
  
  return NextResponse.json(docSnapshot.data() == undefined ? {} : docSnapshot.data()) //return the response as json (if any)
 
}