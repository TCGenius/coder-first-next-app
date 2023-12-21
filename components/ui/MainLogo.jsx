'use client'
import Link from 'next/link'
import { useAuthContext } from '@/contexts/AuthContext'

export default function MainLogo() {
  const { user } = useAuthContext()
  if (!user.logged) {
  return(
    <Link className='text-2xl font-bold' href='/' ><span className='text-blue-700'>C</span>apellari</Link>
  )
  }
  return(
    <Link className='text-2xl font-bold' href='/admin'><span className='text-red-600'>C</span>apellari</Link>
  )
}