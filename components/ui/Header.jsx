import Link from 'next/link';
import Menu from './Menu';
import { Button, Tooltip } from '@nextui-org/react';
import icons from '@/styles/icons';

export default function Header() {
  return(
    <header className='w-full border-b-small h-16 shadow-md bg-white border-blue-300'>
      <div className='container flex justify-between items-center p-4 m-auto'>
        <div className='flex gap-4 items-center text-black'>
          <Menu />
          <span className='text-2xl font-bold'><span className='text-blue-700'>C</span>apellari</span>
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Tooltip content='Iniciar Sesión'>
            <Button isIconOnly className='transition-all hover:animate-pulse bg-transparent text-blue-700' disableRipple>{icons.user}
            </Button>
          </Tooltip>
          <Tooltip content='Mi Carrito'>
            <Button isIconOnly className='transition-all hover:animate-pulse bg-transparent text-blue-700' disableRipple>{icons.cart}
            </Button>
          </Tooltip>
        </div>
      </div>
      
    </header>
  )
}