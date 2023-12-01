'use client'
import { Tooltip, Chip } from '@nextui-org/react'
import Link from 'next/link'
import { useCartContext } from '@/contexts/CartContext'
import { cartIcon } from '@/styles/icons'

export default function Cart(){
  const { cart } = useCartContext()

  return(
    <>
    <Tooltip content='Mi Carrito'>
      <Link className='transition-all hover:animate-pulse bg-transparent text-blue-700 flex gap-1' href='/cart'>
        {cartIcon}
        <Chip size='sm'>{cart.length}</Chip>
      </Link>
    </Tooltip>
    </>
  )
}