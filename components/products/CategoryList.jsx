import categories from '@/data/categories'
import { Tooltip } from '@nextui-org/react'
import Link from 'next/link'


export default function CategoryList( {categ} ) {

  const filteredCategory = categories.find(e => e.short == categ);
  return(
    <>
    <nav className='flex flex-row h-12 justify-start items-center p-4 gap-3 border-b-1 border-blue-300'>
      {categories.map(item => (
          <Link key={item.short} href={item.route} className={`${item.short == categ ? 'font-bold text-blue-700' : ''}
          transition-all hover:text-lg`}>
            {item.name}
          </Link>
      ))}
    </nav>
    <h2 className='text-2xl font-bold mt-4'>{filteredCategory.name}</h2>
    <p className='mt-4 text-xs'>{filteredCategory.description}</p>
    </>
  )
}