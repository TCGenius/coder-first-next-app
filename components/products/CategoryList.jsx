'use client'
import categories from '@/data/categories'
import { back } from '@/styles/icons';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import RouterButton from '../navigation/RouterButton';


export default function CategoryList( {categoryRoute} ) {
  const pathname = usePathname()
  const pathnameControl = pathname.substring(0, categoryRoute.length) === categoryRoute ? pathname : `${categoryRoute}/all`
  const filteredCategory = categories.find(e => `${categoryRoute}/${e.short}` === pathnameControl);
  if(filteredCategory == undefined)
   return (
   <div className='flex flex-col h-full items-center justify-center w-full p-4 gap-4 m-4'>
    <h1 className='text-xl font-bold'>¡Categoría inexistente!</h1>
    <RouterButton>
      {back} Atrás
    </RouterButton>
   </div>
   )
   return(
    <>
    <nav className='flex flex-row h-12 justify-start items-center p-4 gap-3 border-b-1 border-blue-300'>
      {categories.map(item => (
          <Link key={item.short} href={`${categoryRoute}/${item.short}`} className={`${`${categoryRoute}/${item.short}` == pathnameControl ? 'font-bold text-blue-700' : ''}
          transition-all hover:text-lg`}>
            {item.name}
          </Link>
      ))}
    </nav>
    <div className={`${pathname.substring(0, 9) != 'products' ? 'hidden' : ''}`}>
      <h2 className='text-2xl font-bold mt-4'>{filteredCategory.name}</h2>
      <p className='mt-4 text-xs'>{filteredCategory.description}</p>
    </div>
    </>
  )
}