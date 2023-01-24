import React from 'react';
import { text } from '../style';
import { GrClose } from "react-icons/gr";
import { useStateContext } from '../context/ContextProvider';

let notifications = [
  {
    id: 1,
    message: "New learning resource available",
    timestamp: "2022-05-12 14:30:00",
    read: false,
  },
  {
    id: 2,
    message: "New offer available",
    timestamp: "2022-07-01 10:15:30",
    read: false, 
  },
  {
    id: 3,
    message: "Payment approved",
    timestamp: "2022-09-22 16:45:00",
    read: true,
  },
  {
    id: 4,
    message: "Payment declined",
    timestamp: "2022-11-11 12:30:00",
    read: true,
  },
  {
    id: 5,
    message: "New feature added",
    timestamp: "2022-12-24 08:00:00",
    read: true,
  }
];

const Notification = () => {
  const { setShowNotification } = useStateContext();
  return (
    <div className='flex flex-col bg-white z-10 p-6 shadow md:w-[40%] ss:w-[50%] xs:w-[100%] ss:h-auto xs:h-screen
      ss:absolute ss:top-5 ss:right-4 xs:absolute xs:right-0 xs:top-0 ss:mx-4 ss:my-4 rounded-[10px]'>
      <div className='flex flex-row justify-between mb-5'>
        <p className={`${text.normal}`}>Notifications</p>
        <div className=''>
          <button
            className='hover:scale-105 w-[25px] h-[25px] bg-white items-center justify-center flex rounded-full'
            onClick={ () => setShowNotification(false)}
          >
            <GrClose />
          </button>
        </div>
      </div>

      {  notifications.map((item, index) => (
          <div key={index} className='flex flex-row items-center justify-center w-full '>
            <div className={`w-[5px] h-[5px] ${!item.read ? 'bg-[#359602]' : 'bg-gray-200'} rounded-full mr-3`} />
            <div className='flex flex-col py-2 border-b w-full'>
              <p className={`${text.body}`}>{item.message}</p>
              <p className={`${text.small} text-gray-400 mt-2`}>{item.timestamp}</p>
            </div>
          </div>
      ))}

    </div>
  )
}

export default Notification