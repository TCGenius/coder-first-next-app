import { message } from '@/styles/icons'
import { Button, Tooltip } from '@nextui-org/react'

export default function Message() {
  return(
    <div className='fixed right-6 bottom-6 h-20 w-20'>
      <Tooltip showArrow={true} content='¡Chatea con nosotros!'>
        <Button className='text-white bg-transparent w-full h-full rounded-full bg-blue-700 flex items-center justify-center'>
          {message}
        </Button>
      </Tooltip>
    </div>
  )
}