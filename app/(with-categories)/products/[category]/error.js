'use client'
import RouterButton from '@/components/navigation/RouterButton'
import { back } from '@/styles/icons'
import { Button, Image } from '@nextui-org/react'
import { useEffect } from 'react'
export default function Error( {error, reset}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className='container h-screen m-auto p-6'>
      
      <div className='m-auto flex justify-center items-center gap-7'>
        <Image src='/img/brokenfridge.png' alt='Caricatura de heladera dañada' width={300} className=''></Image>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h1 className='text-3xl font-bold'><span className='text-blue-700'>¡Ups! </span>Ocurrió un error</h1>
          <div className='flex justify-center items-center gap-4'>
            <RouterButton>
              {back} Atrás
            </RouterButton>
            <Button
            onClick={reset}
            color='warning'>
              Reintentar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
