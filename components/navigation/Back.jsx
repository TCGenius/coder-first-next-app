'use client'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Back() {
  const router = useRouter()
  return (
    <>
      <Button className='' color='primary' onClick={() => router.back()} >{'< Volver'}</Button>
    </>
  )
}