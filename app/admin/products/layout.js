import CategoryList from '@/components/products/CategoryList';

export default function AdminProductsLayout( {children} ) {
  return(
    <>
    <CategoryList
    categoryRoute={'/admin/products/main'}
    />
    {children}
    </>
  )
}