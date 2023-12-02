'use client'
import categories from '@/data/categories'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


export default function CategoryList() {
  const pathname = usePathname()
  const pathnameControl = pathname.substring(0, 9) === '/products' ? pathname : '/products/all'
  const filteredCategory = categories.find(e => `/products/${e.short}` === pathnameControl);
  return(
    <>
    <nav className='flex flex-row h-12 justify-start items-center p-4 gap-3 border-b-1 border-blue-300'>
      {categories.map(item => (
          <Link key={item.short} href={item.route} className={`${`/products/${item.short}` == pathnameControl ? 'font-bold text-blue-700' : ''}
          transition-all hover:text-lg`}>
            {item.name}
          </Link>
      ))}
    </nav>
    <div className={`${pathname.substring(0, 9) != '/products' ? 'hidden' : ''}`}>
      <h2 className='text-2xl font-bold mt-4'>{filteredCategory.name}</h2>
      <p className='mt-4 text-xs'>{filteredCategory.description}</p>
    </div>
    </>
  )
}