import AdminProductItem from './AdminProductItem'

export default async function AdminProductList ( {productCateg} ) {
  const data = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${productCateg}`, {cache: 'no-store'})
  .then(r => r.json()) //fetch items filtered by category from API

  return(
    <div className='container flex flex-col gap-2 p-4 m-auto'>
      {data.map(item => (
          <AdminProductItem 
          key={item.slug}
          product={item}/>
      ))}
    </div>
  )

}