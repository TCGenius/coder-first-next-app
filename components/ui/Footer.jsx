import Image from 'next/image';

export default function Footer() {
  return(
    <footer className='w-full border-t-small h-64 shadow-md bg-white border-blue-300'>
      <div className='container flex justify-between m-auto items-start py-16'>
        <div className='flex flex-col gap-4 items-center justify-start'>
          <p>Preguntas frecuentes</p>
          <p>Atención al cliente</p>
          <p>Reportar un problema</p>
        </div>
        <div className='flex flex-col gap-4 items-center justify-start'>
          <p>Quiénes somos</p>
          <p>Trabaja con nosotros</p>
        </div>
        <div className='flex flex-col gap-4 items-center justify-start'>
          <p>Powered by</p>
          <Image 
          src='/next.svg'
          alt='Next JS logo' 
          height={200}
          width={200}/>
        </div>
      </div>
      
    </footer>
  )
}