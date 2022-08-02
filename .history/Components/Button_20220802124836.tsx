import React from 'react'

interface ButtonProps{
    type : String;
    classStyle: string 
    
}



export const Button: React.FC = () => {
  return (
    <div>
        <button type={type} className={classStyle}  >{content} </button>
    </div>
  )
}
