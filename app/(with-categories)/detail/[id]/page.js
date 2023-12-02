import ProductDetail from '@/components/products/ProductDetail';

export default function DetailPage( { params } ) {
  const { id } = params
  return (
    <div className='container h-full m-auto p-4 space-y-4'>
      <ProductDetail detail={id} />
    </div>
  )
}