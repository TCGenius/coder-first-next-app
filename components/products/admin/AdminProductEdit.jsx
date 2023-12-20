'use client'
import { Image, Input, Textarea } from '@nextui-org/react';

import { useState } from 'react';


export default function AdminProductEdit( { itemToEdit } ) {

  const [values, setValues] = useState(itemToEdit) //State of the form values
  const [file, setFile] = useState(null) //State of the file to upload

  const handleChange = (e) => {
      setValues({
          ...values,
          [e.target.name]: e.target.value
      })
  } //Handler for every field on change
  return (
    <div className='container flex flex-row md:flex-nowrap flex-wrap h-full rounded-lg gap-4 shadow-md shadow-blue-400 items-center p-4 justify-center bg-white'>
      <div className='flex justify-center md:basis-1/5 basis-full '>
        <Image src={itemToEdit.img} height={350} alt={itemToEdit.name} className='max-h-36'/>
      </div>
      <div className='flex flex-col items-center md:basis-3/5 basis-full justify-center px-4 py-4 gap-4 border border-blue-200 rounded-md'>
        <Input 
        type='text' 
        label='Nombre' 
        name='name' 
        className='m-auto w-full' 
        value={itemToEdit.name} 
        onChange={handleChange}
        />
        <Textarea 
        label='Descripción' 
        name='description' 
        className='description w-full p-2' 
        value={itemToEdit.description}
        onChange={handleChange} 
        />
      </div>
    </div>
  )
}