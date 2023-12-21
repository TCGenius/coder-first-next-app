'use client'
import { Tooltip, Chip, Button } from '@nextui-org/react'
import Link from 'next/link'
import { useCartContext } from '@/contexts/CartContext'
import { useAuthContext } from '@/contexts/AuthContext'
import { cartIcon, signout } from '@/styles/icons'

export default function Cart(){
  const { cart } = useCartContext()
  const { user, logout } = useAuthContext()

  if (!user.logged) {
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
  return(
    <Tooltip
      showArrow={true} 
      content='Cerrar Sesión'>
        <Button
        onClick={logout}
        color='danger'
        className='rounded-full p-1'
        isIconOnly>
          {signout}
        </Button>
      </Tooltip>
  )
}