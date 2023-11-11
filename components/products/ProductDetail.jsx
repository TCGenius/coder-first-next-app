import { Image } from '@nextui-org/react';
import products from '@/data/products';
import CartAdd from '../utilities/CartAdd';

export default function ProductDetail( { detail } ) {

  const filteredItem = products.find(e => e.name == detail); 

  return (
    <div className='container flex flex-row md:flex-nowrap flex-wrap h-full rounded-lg gap-4 shadow-md shadow-blue-400 items-center p-4 justify-center bg-white'>
      <div className='flex justify-center md:basis-3/5 basis-full '>
        <Image src={filteredItem.img} height={250} alt={filteredItem.name} className='max-h-72' />
      </div>
      <div className='flex flex-col items-center md:basis-2/5 basis-full justify-center px-8 py-6 gap-4 border border-blue-200 rounded-md'>
        <h2 className='m-auto text-xl font-bold text-justify border-b-1 border-blue-200 pb-2'>{filteredItem.name}</h2>
        <div className='text-xs text-gray-700 border-b-1 border-blue-200 pb-2'>{filteredItem.description}</div>
        <CartAdd cartValue={0} agregar={1}/>
      </div>
    </div>
  )
}