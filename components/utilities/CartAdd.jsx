'use client'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { useCartContext } from '@/contexts/CartContext'

export default function CartAdd ({ product }) {
  const { addToCart } = useCartContext()
  
  const [item, setItem] = useState([product])

  const popItem = () => {
    let itemArray = [...item]
    itemArray.pop();
    setItem(itemArray)
  } //We take out the last item from the array

  const toCart = (qty) => {
    qty < 0
    ? popItem()
    : setItem([...item, product])
  }

  return(
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-row items-center justify-between gap-2'>
        <Button onClick={() => toCart(-1)} isIconOnly color='primary'>-</Button>
        {item.length}
        <Button onClick={() => toCart(1)} isIconOnly color='primary'>+</Button>
      </div>
      <Button color='primary' 
      onClick={() => {
        addToCart(item)
        setItem([])
        }}>Agregar al carrito</Button>
    </div>
  )
}