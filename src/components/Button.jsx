import React from 'react'

const Button = ({styles, title, outline, small, square}) => (
  <button 
    type="button" 
    className={`${small && "py-3 px-5" } py-4 px-7 ${!square ? "rounded-[5px]" : 
    "rounded-[0px]"} ${outline ? "border-gray-400 border" : "bg-button"} 
    font-poppins text-[18px] ${outline ? "text-black" : "text-primary"} outline-none ${styles}`
  }>
    {title}
  </button>
)

export default Button