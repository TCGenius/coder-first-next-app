import RouterButton from '@/components/navigation/RouterButton';
import AdminProductList from '@/components/products/admin/adminProductList';

export default function AdminProductsPage( { params } ) {
  const { category } = params

  return(
    <>
      <div className='container m-auto p-4'>
        <RouterButton
        navigateTo={'/admin/products/create'}>
          Crear
        </RouterButton>
      </div>
      <AdminProductList 
      productCateg={category}/>
    </>
  )
}