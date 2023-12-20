'use client'
import { useState } from 'react'
import { Autocomplete, AutocompleteItem, Button, Input, Textarea } from '@nextui-org/react'
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '@/firebase/firebase.config'
import categories from '@/data/categories'

const categoriesSpread = [...categories]
categoriesSpread.shift()

const createProduct = async (values, file) => {
  const storageRef = ref( storage, values.slug )
  const fileSnapshot = await uploadBytes( storageRef, file ) //We upload the file
  const fileURL = await getDownloadURL( fileSnapshot.ref ) //We get the download URL of the uploaded file

  const docRef = doc(db, 'products', values.slug)
  return setDoc(docRef, {
      ...values,
      img: fileURL //We assign the image URL to the object in the database
  }).then(() => {
    alert('Producto creado exitosamente')
  })
}

export default function AdminProductCreate() {
  const [values, setValues] = useState({ 
      name: '', 
      description: '', 
      stock: 0,
      price: 0, 
      category: '', 
      slug: ''
  }) //State of the form values
  const [file, setFile] = useState(null) //State of the file to upload

  const handleChange = (e) => {
      setValues({
          ...values,
          [e.target.name]: e.target.value
      })
  } //Handler for every field on change

  const handleSubmit = async (e) => {
      e.preventDefault()
      await createProduct(values, file)
      setValues({ 
        name: '', 
        description: '', 
        stock: 0,
        price: 0, 
        category: '', 
        slug: ''
    })
  } //Handler for submit

  return (
      <div className='container m-auto max-w-lg'>
        <h1 className='text-2xl font-bold'><span className='text-blue-700'>C</span>rear nuevo producto</h1>
          <form onSubmit={handleSubmit} className='p-4 flex flex-col gap-4 bg-white rounded-lg shadow-blue-400 my-4 '>
              <Input
              label='slug'
              description='Código descriptivo único para el producto'
              type='text'
              value={values.slug}
              required
              className='w-full'
              name='slug'
              onChange={handleChange}
              />

              <label>Imagen</label>
              <input
              type='file'
              required
              onChange={(e) => setFile(e.target.files[0])}
              className='w-full'
              />
              <Input
              label='Nombre'
              type='text'
              value={values.name}
              required
              className='w-full'
              name='name'
              onChange={handleChange}
              />

              <Input
              label='Precio'
              startContent='$'
              type='number'
              value={values.price}
              required
              className='w-full'
              name='price'
              onChange={handleChange}
              />

              <Input
              label='Stock'
              type='number'
              required
              className='w-full'
              name='stock'
              onChange={handleChange}
              />
              
              <Autocomplete
              label='Categoría'
              name='category'
              required
              className='w-full'
              onSelectionChange={
              (value) => {
                    setValues({
                    ...values,
                    category: value
                    }
                    )
                }
                }>
                {categoriesSpread.map((category) => (
                  <AutocompleteItem key={category.short} value={category.short} name='category'>
                    {category.name}
                  </AutocompleteItem>
          ))}
        </Autocomplete>
              <Textarea
              label='Descripción'
              value={values.description}
              className='w-full'
              name='description'
              onChange={handleChange}
              />

              <Button type='submit' color='primary'>Crear producto</Button>
          </form>
      </div>
  )
}