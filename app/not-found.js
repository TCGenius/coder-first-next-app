import Back from '@/components/navigation/Back'
import { Image } from '@nextui-org/react'
export default function NotFound() {
  return (
    <div className='container h-screen m-auto p-6'>
      
      <div className='m-auto flex justify-center items-center gap-7'>
        <Image src='/img/emptyfridge.png' alt='Caricatura de heladera vacía con teleraña dentro' width={300} className=''></Image>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h1 className='text-3xl font-bold'><span className='text-blue-700'>¡Ups! </span>Página no encontrada</h1>
          <Back />
        </div>
      </div>
    </div>
  )
}
