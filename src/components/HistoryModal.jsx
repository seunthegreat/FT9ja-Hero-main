import React from 'react';
import Modal from '@mui/material/Modal';
import Select from 'react-select';
import { text } from '../style';
import { useStateContext } from '../context/ContextProvider';
import { GrClose } from "react-icons/gr";
import { methods } from '../functions';
import { Table } from "./index.js";
import { tableFields, selectionData, mock } from '../constants';

//--Data--//
const { commissions, stipends, merch, gifts } = tableFields.benefitsHistory;
const { historyTypes } = selectionData;
const { paymentHistory, commissionHistory, merchHistory, giftHistory } = mock.benefits;

//--Function--//
const { addCommas } = methods.strings;

const HistoryModal = ({type, handleClose, open}) => {
  const {  historySelection, setHistorySelection } = useStateContext();
  return (
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className='flex flex-col justify-center items-center'
      >
          {type && type == 'payment' &&  (
              <div className='flex flex-col rounded-[10px] bg-offWhite lg:w-[60%]
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

                  <div className='flex flex-row w-full mb-5'>
                    <Select
                       options={historyTypes}
                        className="w-[30%]"
                        defaultValue={historyTypes[0].value}
                        onChange={e => setHistorySelection(e.value)}
                      />
                  </div>

                  { historySelection == 'stipend' &&  <Table data={paymentHistory} tableFields={stipends} />}
                  { historySelection == 'commission' && <Table data={commissionHistory} tableFields={commissions} /> }
                  { historySelection == 'merch' &&  <Table data={merchHistory} tableFields={merch} /> }
                  { historySelection == 'gifts' && <Table data={giftHistory} tableFields={gifts} /> }
                  
              </div>
          ) }
      </Modal>
  )
};

export default HistoryModal
  
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