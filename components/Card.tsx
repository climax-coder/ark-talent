import React, { ReactNode } from 'react'

function Card({children} : {children : ReactNode}) {
  return (
    <div className='bg-white rounded-md p-2 px-4 pb-1 m- drop-shadow-sm'>

      {children}

    </div>
  )
}

export default Card