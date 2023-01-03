import React from 'react'

const Button = ({styles, title, outline, small, smallest, square}) => (
  <button 
    type="button" 
    className={`
      ${outline ? "text-black" : "text-primary"} 
      ${small && "py-3 px-5" } 
      ${smallest && "py-2 px-4 text-xs rounded-[3px]"} 
      ${!square ? "rounded-[5px]" : "rounded-[0px]"} 
      ${outline ? "border-gray-400 border" : "bg-button"} 
      font-poppins text-[18px] py-4 px-7  outline-none ${styles} hover:bg-dimGreen hover:text-secondary`
  }>
    {title}
  </button>
)

export default Button