import { Button, Tooltip } from '@nextui-org/react'
import { trashCan } from '@/styles/icons'
import { db } from '@/firebase/firebase.config'
import { doc, deleteDoc } from 'firebase/firestore'

const deleteProduct = async (item) => {
  const docRef = doc(db, 'products', item)
  await deleteDoc( docRef ).then(() => {
    alert('Producto eliminado correctamente')
  }).catch(error => console.log(error))
}

export default function AdminRemove(itemToRemove) {
  return(
    <Tooltip content='Eliminar' shadow='lg'>
      <Button isIconOnly color='danger'>{trashCan}</Button>
    </Tooltip>
  )
}