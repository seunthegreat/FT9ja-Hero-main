import React, { useRef } from 'react';
import { text } from '../style';
import { Copy } from '../assets';
import copyToClipboard from 'clipboard-copy';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const refLink = "http://ft9jahero/Tw6GhofnkdU";

const AffiliateLink = ({containerStyle}) => {
  const ref = useRef();

  const handleCopy = () => {
    copyToClipboard(ref.current.textContent);
    showToastMessage();
    //console.log(ref.current.textContent)
  };

  const showToastMessage = () => {
    toast.success('Copied!', {
        position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <div className={containerStyle}>
      <label className={`block text-gray-700 text-sm font-bold mb-2 ${text.normal}`}>
        Affiliate link
      </label>
      <button  onClick={handleCopy} className='hover:bg-[#E8F4EA] flex flex-row items-center border rounded w-[95%] text-gray-700 focus:outline-none 
        focus:shadow-outline  border ss:mb-0 sm:mb-0 xs:mb-3'>
        <div className='p-4 flex h-full border-r-2 border-gray-100'>
          <img src={Copy} className="h-15 w-15" alt="Copy" />
        </div>
        <div className='flex p-4 '>
          <p  ref={ref} className='font-poppins font-normal  text-gray-500 text-sm leading-[24px]'>{refLink}</p>
        </div>
     </button>
     <ToastContainer />
  </div>
  )
}

export default AffiliateLink