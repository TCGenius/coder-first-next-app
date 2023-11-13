import { Link } from '@nextui-org/react';
import Menu from './Menu';
import { Tooltip } from '@nextui-org/react';
import icons from '@/styles/icons';

export default function Header() {
  return(
    <header className='w-full border-b-small h-16 shadow-md bg-white border-blue-300'>
      <div className='container flex justify-between items-center p-4 m-auto'>
        <div className='flex gap-4 items-center text-black'>
          <Menu />
          <Link className='text-2xl font-bold' href='/' color='foreground'><span className='text-blue-700'>C</span>apellari</Link>
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Tooltip content='Iniciar Sesión'>
            <Link className='transition-all hover:animate-pulse bg-transparent text-blue-700' href='/admin'>{icons.user}
            </Link>
          </Tooltip>
          <Tooltip content='Mi Carrito'>
            <Link className='transition-all hover:animate-pulse bg-transparent text-blue-700' href='/cart'>{icons.cart}
            </Link>
          </Tooltip>
        </div>
      </div>
      
    </header>
  )
}