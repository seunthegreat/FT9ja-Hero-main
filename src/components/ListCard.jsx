import React from 'react';
import { BsShareFill } from "react-icons/bs";

import { methods } from '../functions';
const { convertDateToWords } = methods.date;

const ListCard = ({data}) => (
  <div className='flex flex-row border-b-2 py-4 w-full'>
    <div className='w-[90px] h-[72px] bg-gray-200 rounded-[5px] mr-5 overflow-hidden'>
      <img src={data.image} style={{ objectFit: 'cover'}} className='w-[90px] h-[72px]'/>
    </div>
    <div className='w-full flex flex-col justify-center'>
      <h4 className="text-black text-md mb-1">
      {data.title}
      </h4>
      <div className='flex flex-row justify-between items-center'>
        <p className="font-normal text-gray-500 text-xs leading-[24px] mb-1">
         
          {convertDateToWords(data.date)}
        </p>
        <button>
          <div className='hover:bg-lightGreen w-[28px] h-[28px] bg-[#359602] flex items-center justify-center'>
            <BsShareFill color='white' />
          </div>
        </button>
      </div>
    </div>
  </div>
);

export default ListCard