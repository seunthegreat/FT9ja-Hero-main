import React from 'react';
import { GrClose } from "react-icons/gr";
import { text } from '../style';

const Tips = ({title, body, onClick}) => (
  <div className='bg-[#359602] flex flex-row border rounded-[10px] p-5 mt-5 justify-between items-center'>
    <div>
      {title && <p className={`${text.subHeading} text-white mb-2`}>{title}</p>}
      {body && <p className={`${text.small} text-white`}>{body}</p>}
    </div>
    <div className=''>
      <button
        className='hover:scale-105 w-[25px] h-[25px] bg-white items-center  justify-center flex rounded-full'
        onClick={onClick}
      >
        <GrClose />
      </button>
    </div>
  </div>
)

export default Tips