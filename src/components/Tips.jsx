import React from 'react';
import { GrClose } from "react-icons/gr";
import { text } from '../style';

const Tips = ({title, body, onClick, type, style}) => (
  <div className={`${style} ${type ? type && 'bg-slate-700' : 'bg-[#359602]'} flex flex-row  rounded-[10px] p-5
    justify-between items-center sm:mt-20 ss:mt-20 lg:mt-5 md:mt-5 mb-5 xs:mt-20`}>
    <div className='w-[95%]'>
      {title && <p className={`${text.subHeading} text-white mb-2`}>{title}</p>}
      {body && <p className={`${text.small} text-white`}>{body}</p>}
    </div>
    {type !== "secondary" && (
      <div className=''>
        <button
          className='hover:scale-105 w-[25px] h-[25px] bg-white  items-center  
            justify-center flex rounded-full xs:relative xs:left-2 xs:bottom-10 
            md:bottom-0 lg:bottom-0 sm:bottom-0'
          onClick={onClick}
        >
          <GrClose />
        </button>
      </div>
    )}
  </div>
)

export default Tips