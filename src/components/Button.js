import React from 'react'

const Button = (props) => {
   const {children,onClick,style}= props

  return (
    <div className='bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br
    focus :ring-2 focus :ring-blue-300 disable :bg-gray-400'>
      <button style={style ? style :{background:'',color :"#fff"}} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button;