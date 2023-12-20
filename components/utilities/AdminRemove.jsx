'use client'
import { Button, Tooltip, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { trashCan } from '@/styles/icons'
import { db } from '@/firebase/firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const deleteProduct = async (item) => {
  const docRef = doc(db, 'products', item)
  await deleteDoc( docRef ).then(() => {
    alert('Producto eliminado correctamente')
  }).catch(error => console.log(error))
}



export default function AdminRemove( {itemToRemove} ) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const deleteHandler = async() => {
    await deleteProduct(itemToRemove)
    setIsOpen(false)
    router.refresh()
  }

  return(
    <Tooltip content='Eliminar' shadow='lg'>
      <Popover
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      >
        <PopoverTrigger>
          <Button 
          isIconOnly 
          color='danger'
          >
            {trashCan}
          </Button>
        </PopoverTrigger>
        <PopoverContent
        className='w-48'
        >
          <div className='flex flex-col w-full items-center justify-center px-1 py-2 gap-2 text-center'>
            <h2>¿Confirma la eliminación del artículo?</h2>
            <div className='flex gap-2 items-center justify-center'>
              <Button 
              onClick={deleteHandler}
              color='danger'>Sí</Button>
              <Button 
              onClick={() => setIsOpen(false)}
              color='warning'>No</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </Tooltip>
  )
}