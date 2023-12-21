'use client'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { useCartContext } from '@/contexts/CartContext'
import { useRouter } from 'next/navigation'

export default function CartAdd ({ product }) {
  const { addToCart, cart } = useCartContext()
  
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

  const router = useRouter()

  const addedToCart = cart.filter(added => added.slug == product.slug)
  const realStock = product.stock - addedToCart.length

  return(
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-row items-center justify-between gap-2'>
        <Button onClick={() => toCart(-1)} isIconOnly color='primary'>-</Button>
        {item.length}
        <Button onClick={() => toCart(1)} isIconOnly color='primary'>+</Button>
      </div>
      <div className='flex flex-col items-center justify-center gap-1'>
      <Button color='primary'
      isDisabled = {item.length == 0 || item.length > realStock ? true : false} 
      onClick={() => {
        if (item.length <= realStock) {
          addToCart(item)
          setItem([])
        }
        }}>Agregar al carrito
      </Button>
      <div className='h-4 mb-2'>
        <span className={`text-xs text-red-600 ${item.length > realStock ? '' : 'hidden'}`}>Stock no disponible!</span>
      </div>
      <span>Stock disponible: {realStock}</span>
    </div>
    </div>
  )
}