import { Image } from '@nextui-org/react'

export default function ProductCard({productName, productPrice, productImg}) {
  return(
    <article className='transition-all h-96 w-72 flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-md hover:shadow-lg hover:shadow-blue-400'>
      <div className='h-72 w-full flex items-center justify-center border-b-1 border-blue-300'>
        <Image alt={productName} height={250} src={productImg} className='max-h-64 relative z-10' />
      </div>
      <div className='h-12'>
        <h2 className='text-sm text-black px-4 w-72 productname overflow-hidden overflow-ellipsis'>{productName}</h2>
      </div>
      <h2 className='text-lg text-black font-bold'>${productPrice.toLocaleString()}</h2>
    </article>
  )
}