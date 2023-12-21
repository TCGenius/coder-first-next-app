export default function AdminCard({optionLabel, optionIcon}) {
  return(
    <article className='transition-all flex flex-col items-center justify-center gap-6 p-4 hover:shadow-lg hover:shadow-blue-400 h-80 w-96 bg-white rounded-md'>
      <h2 className='text-2xl'>{optionLabel}</h2>
      <div className='text-blue-700'>
        {optionIcon}
      </div>
    </article>
  )
}