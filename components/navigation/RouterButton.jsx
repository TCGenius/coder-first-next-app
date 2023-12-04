'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function RouterButton({children, navigateTo}) {
  const router = useRouter()
  return (
    <>
      <Button className='text-md' color='primary' onClick={() => navigateTo ? router.push(navigateTo) : router.back()} >{children}</Button>
    </>
  )
}