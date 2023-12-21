'use client'
import { Image, Input, Textarea, Button, Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { useState } from 'react';
import categories from '@/data/categories';
import { db } from '@/firebase/firebase.config';
import { doc, updateDoc } from 'firebase/firestore';

const editProduct = async (slug, values) => {
  await updateDoc(doc(db, 'products', slug), values)
}
const categoriesSpread = [...categories]
categoriesSpread.shift()

export default function AdminProductEdit( { itemToEdit } ) {

  const [values, setValues] = useState(itemToEdit) //State of the form values
  const [enableButton, setEnableButton] = useState(false) //State to enable button on any form change

  const handleChange = (e) => {
    setEnableButton(true)  
    setValues({
          ...values,
          [e.target.name]: e.target.value
      })
  } //Handler for every field on change
  const handleSubmit = async (e) => {
    e.preventDefault()
    await editProduct(values.slug, values)
    alert('Se modificó correctamente el producto')
    setEnableButton(false)
  }
  return (
    <div className='container mx-auto my-4 flex flex-row md:flex-nowrap flex-wrap h-full rounded-lg gap-4 shadow-md shadow-blue-400 items-center p-4 justify-center bg-white'>
      <div className='flex justify-center md:basis-1/5 basis-full '>
        <Image src={itemToEdit.img} height={350} alt={itemToEdit.name} className='max-h-36'/>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center md:basis-3/5 basis-full justify-center px-4 py-4 gap-4 rounded-md'>
        <Input 
        type='text'  
        color='primary'
        label='Nombre'
        name='name' 
        size='lg'
        className='m-auto w-full' 
        value={values.name} 
        onChange={handleChange}
        />
        <Input 
        type='number' 
        color='primary'
        label='Precio' 
        startContent='$'
        name='price' 
        className='m-auto w-full' 
        value={values.price} 
        onChange={handleChange}
        />
        <Input 
        type='number' 
        color='primary'
        label='Stock' 
        name='stock' 
        className='m-auto w-full' 
        value={values.stock} 
        onChange={handleChange}
        />
        <Textarea 
        label='Descripción' 
        color='primary'
        name='description' 
        className='description w-full' 
        value={values.description}
        onChange={handleChange} 
        />
        <Autocomplete
        label='Categoría'
        color='primary'
        name='category'
        selectedKey={values.category} //This way, the 
        onSelectionChange={
          (value) => {
            setEnableButton(true)
            setValues({
              ...values,
              category: value
            }
            )
          }
        }>
          {categoriesSpread.map((category) => (
            <AutocompleteItem 
            key={category.short} 
            value={category.short} 
            name='category'>
              {category.name}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        
        <Button type='submit' isDisabled={!enableButton} color='primary'>Guardar cambios</Button>
      </form>
    </div>
  )
}