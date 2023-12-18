'use client'
import { useState } from 'react'
import { Button, Select, SelectItem } from '@nextui-org/react'
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
      image: fileURL //We assign the image URL to the object in the database
  }).then(() => console.log('Producto creado exitosamente'))
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
  } //Handler for submit

  return (
      <div className='container m-auto mt-6 max-w-lg'>
          <form onSubmit={handleSubmit} className='my-12'>
              <label>slug: </label>
              <input
                  type='text'
                  value={values.slug}
                  required
                  className='p-2 rounded w-full border border-blue-100 block my-4'
                  name='slug'
                  onChange={handleChange}
              />

              <label>Imagen: </label>
              <input
                  type='file'
                  required
                  onChange={(e) => setFile(e.target.files[0])}
                  className='p-2 rounded w-full border border-blue-100 block my-4'
              />

              <label>Nombre: </label>
              <input
                  type='text'
                  value={values.name}
                  required
                  className='p-2 rounded w-full border border-blue-100 block my-4'
                  name='name'
                  onChange={handleChange}
              />

              <label>Precio: </label>
              <input
                  type='number'
                  value={values.price}
                  required
                  className='p-2 rounded w-full border border-blue-100 block my-4'
                  name='price'
                  onChange={handleChange}
              />

              <label>Stock: </label>
              <input
                  type='number'
                  value={values.stock}
                  required
                  className='p-2 rounded w-full border border-blue-100 block my-4'
                  name='stock'
                  onChange={handleChange}
              />

              <label>Categoria: </label>
              
              <Select
                  type='text'
                  value={values.category}
                  required
                  className='p-2 rounded w-full border border-blue-100 block my-4'
                  name='category'
                  onChange={handleChange}
              >
              {categoriesSpread.map((category) => (
                <SelectItem key={category.short} value={category.short}>
                  {category.name}
                </SelectItem>
              ))}
              </Select>

              <label>Descripción: </label>
              <textarea
                  value={values.description}
                  className='resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4'
                  name='description'
                  onChange={handleChange}
              />

              <Button type='submit'>Enviar</Button>
          </form>
      </div>
  )
}