import React from 'react';
import { text } from '../style';
import { methods } from '../functions';
const { addCommas } = methods.strings;

const statusStyling = (column, item) => (
  column.label.toLowerCase() == 'status' &&  
  item[column.label.toLowerCase()] == 'pending' && 'text-orange-500' ||
  item[column.label.toLowerCase()] == 'declined' && 'text-red-800' || 
  item[column.label.toLowerCase()] == 'approved' && 'text-secondary'
);
  
const formatText = (column, item) => {
  if (column == 'amount') return addCommas(item)
  return item;
};

const Table = ({data, tableFields}) => (
  <div className='flex flex-col w-full items-center justify-center items-center'>
    <div className={`grid grid-flow-col grid-cols-${tableFields.length} border border-gray-200 bg-[#FBFBFB] w-full`}>
      { tableFields.map((item, index) => (
        <div key={index} className='sm:px-10 py-2'>
          <p className={`${text.normal}`}>{item.label}</p>
        </div>
      ))}
    </div>
    
    { data.map((item, index) => (
        <div key={index} className={`grid grid-flow-col grid-cols-${tableFields.length} border border-t-0 border-gray-200 
          bg-white w-full items-center justify-center`}>
          {tableFields.map((column, index) => (
            <div key={index} className='sm:px-10 py-2'>
              <p className={`${statusStyling(column, item)} 
                md:text-ss sm:text-xs xs:text-xs font-light text-gray-500`}>{formatText(column.label.toLowerCase(), item[column.label.toLowerCase()])}</p>
              </div>
            ))}
        </div>
    ))}
    { data.length == 0 && (
        <div className='p-10'>
          <p className={`text-sm font-light`}>No Record Found!</p>
        </div>
    )}
  </div>
);

export default Table