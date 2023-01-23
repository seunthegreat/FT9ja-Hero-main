import React from 'react';
import Modal from '@mui/material/Modal';
import { text } from '../style';
import { useStateContext } from '../context/ContextProvider';
import { GrClose } from "react-icons/gr";
import { addCommas } from '../functions';

const paymentHistory = [
  { "id": 1, "date": "01/01/2022", "status": "approved", "amount": 40000},  
  { "id": 2, "date": "01/02/2022", "status": "declined", "amount": 40000 },  
  { "id": 3, "date": "01/03/2022", "status": "approved", "amount": 40000 },
  { "id": 4, "date": "01/04/2022", "status": "approved", "amount": 40000 },
  { "id": 5, "date": "01/05/2022", "status": "pending", "amount": 40000 }
];

const formatDate = (inputDate) => {
  let date = new Date(inputDate);
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const HistoryModal = ({type}) => {
  const { setOpenPaymentHistory } = useStateContext();
  const handleClose = () => setOpenPaymentHistory(false);
  return (
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='flex flex-col justify-center items-center'
      >
          {type && type == 'payment' &&  (
              <div className='flex flex-col rounded-[10px] bg-white lg:w-[60%]
               xs:w-[100%] xs:h-[100%] overflow-hidden lg:p-10 md:p-10 xs:px-0 xs:py-10'>
                  <div className='flex flex-row md:mb-10 sm:mb-5 justify-between lg:px-0 xs:px-5 xs:mb-5'>
                      <p className={`${text.subHeading}`}>History</p>

                      <div className=''>
                          <button
                              className='hover:scale-105 w-[25px] h-[25px] bg-white items-center  justify-center flex rounded-full'
                              onClick={handleClose}
                          >
                              <GrClose />
                          </button>
                      </div>
                  </div>
                  <div className='flex flex-col bg-gray-100 w-full items-center justify-center py-10 px-5 items-center'>
                      <div className='grid grid-flow-col grid-cols-3 border-b-2 border-gray-200 w-full mb-5'>
                          <div className='md:p-3 sm:mb-2 sm:px-2'>
                              <p className={`${text.normal}`}>Date</p>
                          </div>
                          <div className='md:p-3 sm:mb-2 sm:px-2'>
                              <p className={`${text.normal}`}>Status</p>
                          </div>
                          <div className='md:p-3 sm:mb-2 sm:px-2'>
                              <p className={`${text.normal}`}>Payment Amount</p>
                          </div>
                      </div>

                      {paymentHistory.map((item, index) => (
                          <div key={index} className='grid grid-flow-col grid-cols-3 border-b-2 border-gray-200 w-full'>
                              <div className='py-3'>
                                  <p className={`md:text-ss sm:text-xs xs:text-xs font-light text-gray-500`}>{formatDate(item.date)}</p>
                              </div>
                              <div className='py-3 flex flex-row'>
                                  <div className={`${item.status == 'approved' && 'bg-fadeGreen' || item.status == 'declined' && 'bg-red-200'
                                      || item.status == 'pending' && 'bg-orange-200'} py-1 w-3/4 flex flex-col items-center justify-center rounded`}>
                                      <p className={`${item.status == 'approved' ? 'text-[#008000]' : 'text-black'} xs:text-xs 
                                       text-ss sm:text-xs font-light text-gray-500`}>{item.status}</p>
                                  </div>
                              </div>
                              <div className='py-3'>
                                  <p className={`text-ss font-light sm:text-xs  xs:text-xs font-light text-gray-500 `}>{addCommas(item.amount)}</p>
                              </div>
                          </div>
                      ))}

                      {paymentHistory.length == 0 && (
                          <div className='p-10'>
                              <p className={`text-sm font-light`}>No Record Found!</p>
                          </div>
                      )}
                  </div>
              </div>
          ) }
      </Modal>
  )
}

export default HistoryModal