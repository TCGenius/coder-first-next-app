import AdminProductList from '@/components/products/admin/adminProductList';

export default function AdminProductsPage( { params } ) {
  const { category } = params

  return(
    <>
      <AdminProductList 
      productCateg={category}/>
    </>
  )
}