'use client'
import products from '@/data/products'
import { Image,  Button } from '@nextui-org/react'
import { trashCan } from '@/styles/icons'
import CartAdd from '@/components/utilities/CartAdd'
import Back from '@/components/navigation/Back'

export default function CartPage() {
  const productsCopy = [...products]
  const cartSimulation = productsCopy.splice(0, 3) //Usamos esto hasta agregar la funcionalidad del carrito
  return(
    <div className='ml-8 my-4 w-1/2'>
      <Back />
        <h2 className='text-2xl text-center font-bold'>Carrito</h2>
      <table className='table-auto w-full'>
        <tbody>
            {cartSimulation.map( item => (
              <tr key={item.id} className='transition-all h-32 border-1 border-blue-400 rounded-lg my-4 flex items-center justify-between p-4 bg-white hover:bg-blue-100'>
                <td className='w-32'><Image src={item.img} alt={item.name} className='max-h-24' height={100}></Image></td>
                <td className='overflow-hidden p-4  overflow-ellipsis w-full'>{item.name}</td>
                <td><CartAdd agregar={0} cartValue={item.id}></CartAdd></td> {/*Aún no se agrega esta funcionalidad. Se usa la ID como una cantidad ficticia*/}
              </tr>
              ))}

        </tbody>
      </table>
    </div>
  )
}