import RouterButton from '@/components/navigation/RouterButton';
import ProductDetail from '@/components/products/ProductDetail';
import { Spinner } from '@nextui-org/react';
import { Suspense } from 'react';

export default function DetailPage( { params } ) {
  const { slug } = params
  return (
    <div className='container h-full m-auto p-4 space-y-4'>
      <Suspense fallback={<Spinner className='h-64 w-64' label='Aguarde un momento...'></Spinner>}>
        <RouterButton
        navigateTo={'/products/all'}>
          Seguir comprando
        </RouterButton>
        <ProductDetail detail={decodeURI(slug)} /*Usamos decodeURI para que pase el slug correctamente desde la URL*//>
      </Suspense>
    </div>
  )
}