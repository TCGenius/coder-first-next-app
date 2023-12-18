import { pencil, trashCan } from '@/styles/icons'
import { Button, Image, Tooltip } from '@nextui-org/react'
import Link from 'next/link'

export default function AdminProductItem({product}) {
  return (
    <div className='transition-all hover:bg-blue-100 w-full flex h-16 justify-between gap-2 items-center py-2 px-4 rounded-md bg-white'>
      <Link href={`admin/products/detail/${product.slug}`} className='flex'>
        <Image src={product.img} alt={product.name} className='max-h-14'/>
      </Link>
      <Link href={`admin/products/detail/${product.slug}`} className='flex'>
        <span className='text-md font-bold adminProductName'>{product.name}</span>
      </Link>
      <div className='flex justify-center items-center gap-2'>
        <Tooltip content='Editar' shadow='md'>
          <Button isIconOnly color='secondary'>{pencil}</Button>
        </Tooltip>
        <Tooltip content='Eliminar' shadow='lg'>
          <Button isIconOnly color='danger'>{trashCan}</Button>
        </Tooltip>
      </div>
    </div>
  )
}