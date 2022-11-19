import React from 'react'

const Success = ({children}) => {
  return (
    <div className='bg-green-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
      <p>{children} </p>
    </div>
  )
}

export default Success
