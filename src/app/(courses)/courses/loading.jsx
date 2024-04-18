import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-full max-w-md bg-foreground/5 p-10  '>
        <Loader2 className='animate-spin' />
    </div>
  )
}

export default Loader