import Back from '@/components/navigation/Back';
import ProductDetail from '@/components/products/ProductDetail';
import { Image } from '@nextui-org/react';

export default function DetailPage( { params } ) {
  const { id } = params
  const decodedId = decodeURI(id) //Hasta que no se utilice una base de datos, mantengo esto. Luego se utilizará otro identificador para hacerlo más escalable
  return (
    <div className='container h-full m-auto p-4 space-y-4'>
      <Back />
      <ProductDetail detail={id} />
      
    </div>
  )
}