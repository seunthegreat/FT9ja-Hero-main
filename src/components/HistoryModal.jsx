import React from 'react';
import Modal from '@mui/material/Modal';
import Select from 'react-select';
import { text } from '../style';
import { useStateContext } from '../context/ContextProvider';
import { GrClose } from "react-icons/gr";
import { methods } from '../functions';

const tableFields = {
  stipends: [
    {id: 0, label: "Date"},
    {id: 1, label: "Status"},
    {id: 2, label: "Amount"},
  ],
  commissions: [
    {id: 0, label: "Referee"},
    {id: 1, label: "Amount"},
    {id: 2, label: "Date"},
    {id: 3, label: "Status"},
  ],
  merch: [
    {id: 0, label: "Name"},
    {id: 1, label: "Date"},
    {id: 2, label: "Method"},
    {id: 2, label: "Quantity"},
    {id: 3, label: "Status"},
  ],
  gifts: [
    {id: 0, label: "Name"},
    {id: 1, label: "Earned"},
    {id: 2, label: "Expires"},
    {id: 3, label: "Status"},
  ],
};
    
const { commissions, stipends, merch, gifts } = tableFields

const historyTypes = [
  { "label": "Total Stipend", "value": "stipend" },
  { "label": "Referral Commission", "value": "commission" },
  { "label": "FT9a Merch", "value": "merch" },
  { "label": "Gifts and Offers", "value": "gifts" },
];

//--Mock Data--//
const paymentHistory = [
  { "id": 1, "date": "01/01/2022", "status": "approved", "amount": 40000},  
  { "id": 2, "date": "01/02/2022", "status": "declined", "amount": 40000 },  
  { "id": 3, "date": "01/03/2022", "status": "approved", "amount": 40000 },
  { "id": 4, "date": "01/04/2022", "status": "approved", "amount": 40000 },
  { "id": 5, "date": "01/05/2022", "status": "pending", "amount": 40000 }
];

const commissionHistory = [
  { id: 1, referee: "John Smith", amount: 10000, date: "01/01/2023", status: "pending" },
  { id: 2, referee: "Jane Doe", amount: 10000, date: "01/01/2023", status: "approved" },
  { id: 3, referee: "Bob Johnson", amount: 10000, date: "01/01/2023", status: "pending" },
  { id: 4, referee: "Emily Davis", amount: 10000, date: "01/01/2023", status: "approved" },
  { id: 5, referee: "Michael Brown", amount: 10000, date: "01/01/2023", status: "pending" },
  { id: 6, referee: "Sarah Miller", amount: 10000, date: "01/01/2023", status: "approved" },
  { id: 7, referee: "David Wilson", amount: 10000, date: "01/01/2023", status: "pending" },
  { id: 8, referee: "Jessica Moore", amount: 10000, date: "01/01/2023", status: "approved" }
];

const merchHistory = [
  { "id": 1, "name": "T-Shirt", "date": "01/5/2023", "method": "Referral Commission", "quantity": 2, "status": "pending" },
  { "id": 2, "name": "Coffee Mug", "date": "01/5/2023", "method": "Promotion", "quantity": 1, "status": "pending" },
  { "id": 3, "name": "Water Bottle", "date": "01/5/2023", "method": "Points Redemption", "quantity": 1, "status": "shipped" },
  { "id": 4, "name": "Hoodie", "date": "01/5/2023", "method": "Referral Commission", "quantity": 1, "status": "pending" }, 
  { "id": 5, "name": "Poster", "date": "01/5/2023", "method": "Points Redemption", "quantity": 2, "status": "shipped" }
];

const giftHistory = [];

const { formatDate } = methods.date;
const { addCommas } = methods.strings;

const HistoryModal = ({type}) => {
  const { setOpenPaymentHistory, historySelection, setHistorySelection } = useStateContext();
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