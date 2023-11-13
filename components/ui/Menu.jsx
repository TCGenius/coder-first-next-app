'use client'
import { Button, Link } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import icons from '@/styles/icons';
import { useState } from 'react';

export default function Menu() {
const [open, setOpen] = useState(false)
const handleOpen = () => {
  setOpen(true)
}

const handleClose = () => {
  setOpen(false)
}

const menuList = [{
  name: 'Nuestros productos',
  url: '/products/all'
}, {
  name: '',
  url: '/products/'
}, {
  name: 'Nosotros',
  url: '/nosotros'
}]

  return(
    <>
      <Button onClick={handleOpen} isIconOnly className='bg-transparent text-black' disableAnimation>{icons.hamb}</Button>
      <div 
      className={`${open ? 'opacity-100 visible' : 'invisible opacity-0'} 
      transition-all fixed inset-0 bg-black/50 flex justify-start z-50`}>
        <aside
        className={`${!open ? '-translate-x-48' : ''} transition-all w-48 bg-slate-200 shadow-md `}>
          <div
          className='text-left py-4'>
            <Button onClick={handleClose} className='bg-transparent w-max text-black'>{icons.close}</Button>
          </div>
          <nav className='flex mt-4 flex-col gap-4 px-3 text-black'>
            <Link href='/products/all' className='text-black ml-4'>Nuestros productos</Link>
            <Link href='/prueba' className='text-black ml-4'>Lavarropas</Link>
            <Link href='/prueba' className='text-black ml-4'>Cocina</Link>
          </nav>
        </aside>
      </div>
    </>
  )
}