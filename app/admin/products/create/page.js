import RouterButton from '@/components/navigation/RouterButton';
import AdminProductCreate from '@/components/products/admin/AdminProductCreate';

export default function CreatePage() {
  return(
    <>
      <div className='container m-auto p-4'>
        <RouterButton
        navigateTo={'/admin/products/main/all'}>
          Volver a edición
        </RouterButton>
      </div>
    <AdminProductCreate />
    </>
  )
}