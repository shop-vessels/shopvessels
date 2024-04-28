import { Loader } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full max-w-md p-10  mx-auto flex justify-center items-center'>
        <Loader className='animate-spin' />
    </div>
  )
}

export default Loading