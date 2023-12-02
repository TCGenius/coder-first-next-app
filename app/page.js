import Link from 'next/link'

export default function Home() {
//Toda la página principal continúa en construcción. Solo se agrega un link a /products/all
  return (
    <div className='container m-auto h-screen flex flex-row items-center justify-center'>
      <Link href='/products/all' className='m-auto' color='foreground'>
        <div className='transition-all flex m-auto h-96 bg-white shadow-2xl shadow-blue-500 hover:shadow-md hover:shadow-blue-400 rounded-lg justify-center items-center'>
            <h1 className='my-auto font-bold md:text-3xl text-xl px-8'><span className='text-blue-700'>C</span>onoce todos nuestros productos</h1>
        </div>
      </Link>
    </div>
  )
}
