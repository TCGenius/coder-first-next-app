import { trashCan } from '@/styles/icons';
import { useCartContext } from '@/contexts/CartContext';
import { Button } from '@nextui-org/react';

export default function CartRemove( { itemToRemove } ) {
  const { removeFromCart } = useCartContext()
  return(
    <Button isIconOnly color='danger' onClick={() => {
      removeFromCart(itemToRemove)
    }}>{trashCan}</Button>
  )
}