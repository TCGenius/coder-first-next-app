import AdminProductEdit from '@/components/products/admin/AdminProductEdit'

export default async function AdminItemEdit( {params} ) {
  const { slug } = params
  const data = await fetch(`http://localhost:3000/api/detail/${slug}`, {cache: 'no-store'})
  .then(r => r.json()) //fetch single product from API

  if (!data.slug){
   notFound() //Routes into not-found.js if not data is returned
  }
  return(
    <>
    <AdminProductEdit
    itemToEdit={data}/>
    </>
  )
}