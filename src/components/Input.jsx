import React from 'react';
import { text } from '../style';

const Input = ({ label, id, type, placeholder }) => {
  return (
    <div className='mb-5'>
      <label className={`block text-gray-700 text-sm font-bold mb-2 ${text.normal}`}>
        {label}
      </label>
      <input 
        className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none 
          focus:shadow-outline  border px-5 py-3 ss:mb-0 sm:mb-0 xs:mb-3" 
        id={id} 
        type={type} 
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input