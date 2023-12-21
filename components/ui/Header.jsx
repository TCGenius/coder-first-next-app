import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import Menu from './Menu';
import Cart from './Cart';
import MainLogo from './MainLogo';

export default function Header() {
  return(
    <header className='w-full border-b-small h-16 shadow-md bg-white border-blue-300'>
      <div className='container flex justify-between items-center p-4 m-auto'>
        <div className='flex gap-4 items-center text-black'>
          <Menu />
          <MainLogo />
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Cart />
        </div>
      </div>
      
    </header>
  )
}