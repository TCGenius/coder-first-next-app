'use client'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { Input } from '@nextui-org/react'

export default function CartAdd ({ agregar, cartValue }) {

  const [cart, setCart] = useState(cartValue)
  const toCart = (qty) => {
    cart <= 0 && qty < 0 ? setCart(0) : setCart(cart + qty)
  }
  return(
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-row items-center justify-between gap-2'>
        <Button onClick={() => toCart(-1)} isIconOnly color='primary'>-</Button>
        {cart}
        <Button onClick={() => toCart(1)} isIconOnly color='primary'>+</Button>
      </div>
      <Button color='primary' className={`${agregar == 1 ? 'visible' : 'hidden'} `}>Agregar al carrito</Button> {/*Aún no se agrega esta funcionalidad.*/}
    </div>
  )
}