'use client'
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { eye, eyeSlash } from '@/styles/icons';
import { useAuthContext } from '@/contexts/AuthContext';

export default function LoginForm() {
  const [visible, setVisible] = useState(false)
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
  })
  }

  const { createUser, loginUser } = useAuthContext()
  return(
    <div className='container min-h-screen flex items-center justify-center'>
      <div className='md:w-1/2 w-full m-auto flex flex-col items-center justify-center p-4 bg-white rounded-lg'>
        <h1 className='font-bold text-xl mb-4 border-b-1 border-blue-300 w-full text-center pb-4'>Iniciar sesión</h1>
        <form className='flex flex-col gap-4 items-center justify-center mx-4 my-2 w-5/6'>
          <Input
          color='primary'
          name='email'
          label='Correo'
          type='email'
          className='w-full'
          onChange={handleChange}
           />
          <Input
          color='primary'
          name='password'
          label='Contraseña'
          type={!visible ? 'password' : 'text'}
          className='w-full'
          onChange={handleChange}
          endContent={
            <Button
            onClick={() => setVisible(!visible)}
            isIconOnly
            className='bg-transparent'
            disableRipple>
            {!visible ? eye : eyeSlash}
            </Button>
            }
          />
          <div className='flex w-full gap-3 items-center justify-center'>
            <Button 
            color='primary'
            onClick={() => {
              loginUser(values)
            }}>
              Iniciar Sesión
              </Button>
            <Button 
            color='secondary'
            onClick={() => {
              createUser(values)
            }}>
              Registrarme
              </Button>
          </div>
        </form>
      </div>
    </div>
  )
}