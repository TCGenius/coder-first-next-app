import { Skeleton } from '@nextui-org/react';

export default async function ListSkeleton() {



  return(
    <div className='flex flex-row flex-wrap gap-6 md:mx-auto m-auto my-4 md:justify-start justify-center bg-inherit h-full'>
      <Skeleton>
        <article className='transition-all h-96 w-72 flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-md hover:shadow-lg hover:shadow-blue-400'>
          <div className='h-72 w-full flex items-center justify-center border-b-1 border-blue-300'>
          </div>
          <div className='h-12'>
            <h2 className='text-sm text-black px-4 w-72 productname overflow-hidden overflow-ellipsis'></h2>
          </div>
          <h2 className='text-lg text-black font-bold'></h2>
        </article>
      </Skeleton>
      <Skeleton>
        <article className='transition-all h-96 w-72 flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-md hover:shadow-lg hover:shadow-blue-400'>
          <div className='h-72 w-full flex items-center justify-center border-b-1 border-blue-300'>
          </div>
          <div className='h-12'>
            <h2 className='text-sm text-black px-4 w-72 productname overflow-hidden overflow-ellipsis'></h2>
          </div>
          <h2 className='text-lg text-black font-bold'></h2>
        </article>
      </Skeleton>
      <Skeleton>
        <article className='transition-all h-96 w-72 flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-md hover:shadow-lg hover:shadow-blue-400'>
          <div className='h-72 w-full flex items-center justify-center border-b-1 border-blue-300'>
          </div>
          <div className='h-12'>
            <h2 className='text-sm text-black px-4 w-72 productname overflow-hidden overflow-ellipsis'></h2>
          </div>
          <h2 className='text-lg text-black font-bold'></h2>
        </article>
      </Skeleton>
      <Skeleton>
        <article className='transition-all h-96 w-72 flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-md hover:shadow-lg hover:shadow-blue-400'>
          <div className='h-72 w-full flex items-center justify-center border-b-1 border-blue-300'>
          </div>
          <div className='h-12'>
            <h2 className='text-sm text-black px-4 w-72 productname overflow-hidden overflow-ellipsis'></h2>
          </div>
          <h2 className='text-lg text-black font-bold'></h2>
        </article>
      </Skeleton>
      <Skeleton>
        <article className='transition-all h-96 w-72 flex flex-col items-center justify-center gap-2 py-4 bg-white rounded-md hover:shadow-lg hover:shadow-blue-400'>
          <div className='h-72 w-full flex items-center justify-center border-b-1 border-blue-300'>
          </div>
          <div className='h-12'>
            <h2 className='text-sm text-black px-4 w-72 productname overflow-hidden overflow-ellipsis'></h2>
          </div>
          <h2 className='text-lg text-black font-bold'></h2>
        </article>
      </Skeleton>
    </div>
    
  )
}