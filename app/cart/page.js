'use client'
import { Image,  Button, ScrollShadow } from '@nextui-org/react'
import RouterButton from '@/components/navigation/RouterButton'
import { useCartContext } from '@/contexts/CartContext'
import CartRemove from '@/components/utilities/CartRemove'
import Link from 'next/link'
import { Input } from '@nextui-org/react'
import { creditCard } from '@/styles/icons'

export default function CartPage() {
  const { clearCart, cart } = useCartContext()
  const totalPrice = cart.reduce ((acc, obj) => {
    return acc + obj.price
  }, 0)

  return(
    <div className='container m-auto flex flex-col items-center justify-center p-4'>
        <RouterButton 
        navigateTo='/products/all'>
          Seguir comprando
        </RouterButton>
        <div className='flex flex-wrap w-full justify-between items-center gap-4 p-4'>
          <div className='p-4 text-center md:basis-1/2 w-full'>
              <h2 className='text-2xl text-center font-bold mt-4'>Carrito</h2>
              <ScrollShadow hideScrollBar size={100}>
              <div className='w-full max-h-screen'>
                <table className='w-full'>
                  <tbody>
                      {cart.length == 0 
                      ? <tr className='h-32 border-1 border-blue-400 rounded-lg my-4 flex items-center justify-between p-4 bg-white'>
                        <td className='w-full text-xl font-bold'>¡Tu carrito está vacío!</td>
                      </tr>
                      : cart.map( (item, index) => (
                        <tr key={index} className='transition-all h-32 border-1 border-blue-400 rounded-lg my-4 flex items-center justify-between p-4 bg-white hover:bg-blue-100'>
                          <td className='w-32'><Image src={item.img} alt={item.name} className='max-h-24' height={100}></Image></td>
                          <td className='p-4 w-full flex flex-col items-center gap-2'>
                            <Link href={`/detail/${item.slug}`}><p className='productname'>{item.name}</p></Link>
                            <p className='text-md font-bold'>${item.price.toLocaleString('es-AR')}</p>
                          </td>
                          <td><CartRemove itemToRemove={index} /></td>
                        </tr>
                        ))}
                  </tbody>
                </table>
              </div>
              </ScrollShadow>
            <h2 className='text-lg'>Total: <strong>${totalPrice.toLocaleString('es-AR')}</strong></h2>
            <Button onClick={() => clearCart() } color='primary'>Vaciar carrito</Button>
          </div>
          <div className='md:basis-2/5 w-full'>
            <form className='flex flex-col gap-3 items-center justify-center w-full'>
              <Input 
              type='text'
              label='Nombre y apellido'
              placeholder='Ingrese su nombre'
              className='w-full'
              />
              <Input 
              type='email'
              label='e-mail'
              placeholder='Ingrese su correo electrónico'
              />
             <Button color='primary' className='m-auto mt-3' isDisabled={cart.length == 0 ? true : false}>{creditCard} Continuar al pago</Button>
            </form>
          </div>
        </div>
    </div>
  )
}