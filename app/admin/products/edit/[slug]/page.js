import RouterButton from '@/components/navigation/RouterButton'
import AdminProductEdit from '@/components/products/admin/AdminProductEdit'

export default async function AdminItemEdit( {params} ) {
  const { slug } = params
  const data = await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/detail/${slug}`, {cache: 'no-store'})
  .then(r => r.json()) //fetch single product from API

  if (!data.slug){
   notFound() //Routes into not-found.js if not data is returned
  }
  return(
    <>
    <div className='container m-auto p-4'>
        <RouterButton
        navigateTo={'/admin/products/main/all'}>
          Volver
        </RouterButton>
      </div>
    <AdminProductEdit
    itemToEdit={data}/>
    </>
  )
}