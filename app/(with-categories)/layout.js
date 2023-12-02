import CategoryList from '@/components/products/CategoryList';

export default function CategoryLayout({ children }) {
  return(
    <div className='container h-full m-auto text-center'>
      <CategoryList />
      {children}
    </div>
  )
}