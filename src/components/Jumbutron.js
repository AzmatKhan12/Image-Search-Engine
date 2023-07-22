import React from 'react'
const Jumbutron = ({children}) => {

  
 const onClick = ()=>{
  console.log("clicked")
 }

  return (
      <div className='bg-gray-900 flex item-center py-10'>
        <div className='mx-w-md max-auto w-full'>
          <h1 className='text-white text-center text-2xl font-bold mb-5' >Find images</h1>
          {children}
        </div>
       
      </div>


       

  )
}

export default Jumbutron