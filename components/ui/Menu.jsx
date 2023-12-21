'use client'
import { Button } from '@nextui-org/react';
import {hamb, close} from '@/styles/icons';
import { useState } from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function Menu() {
const [open, setOpen] = useState(false)
const handleOpen = () => {
  setOpen(true)
}

const handleClose = () => {
  setOpen(false)
}

const menuList = [
  {
    label: 'Nuestros productos',
    href: '/products/all'
  },
  {
    label: 'Nosotros',
    href: '/nosotros'
  },
  {
    label: 'Contacto',
    href: '/contacto'
  }
]

const adminMenu = [
  {
    label: 'Productos',
    href: '/admin/products/main/all'
  },
  {
    label: 'Categorías',
    href: '/admin/categories'
  },
  {
    label: 'Configuración',
    href: '/admin/settings'
  }
]

const { user } = useAuthContext();

  return(
    <>
      <Button onClick={handleOpen} isIconOnly className='bg-transparent text-black' disableAnimation>{hamb}</Button>
      <div 
      className={`${open ? 'opacity-100 visible' : 'invisible opacity-0'} 
      transition-all fixed inset-0 bg-black/50 flex justify-start z-50`}>
        <aside
        className={`${!open ? '-translate-x-48' : ''} transition-all w-48 bg-white border-r-1 border-blue-500 shadow-md `}>
          <div
          className='text-left py-4'>
            <Button onClick={handleClose} className='bg-transparent w-max text-black'>{close}</Button>
          </div>
          <nav className='flex mt-4 flex-col gap-4 px-3 text-black'>
            {user.logged ? 
              adminMenu.map((link => (
                <Link 
                key={link.label} 
                href={link.href} 
                className='transition-all text-black ml-4 border-l-2 hover:border-l-4 hover:font-bold border-blue-500 pl-3'>{link.label}</Link>
              )))
              :
              menuList.map((link => (
                <Link 
                key={link.label} 
                href={link.href} 
                className='transition-all text-black ml-4 border-l-2 hover:border-l-4 hover:font-bold border-blue-500 pl-3'>{link.label}</Link>
              )))}
          </nav>
        </aside>
      </div>
    </>
  )
}