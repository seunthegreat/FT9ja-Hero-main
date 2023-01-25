import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { useStateContext } from '../context/ContextProvider';
import { PayPal, Bank } from '../assets';
import { Tips, Button } from ".";
import { text } from '../style';
import { GrClose } from "react-icons/gr";
import Select from 'react-select';
import { methods } from '../functions';
const { addCommas } = methods.strings;

const banksArr = [
  { "label": "UBA", "value": "United Bank for Africa" },
  { "label": "GTB", "value": "Guaranty Trust Bank" },
  { "label": "FBN", "value": "First Bank of Nigeria" },
  { "label": "ZENITH", "value": "Zenith Bank" },
  { "label": "ACCESS", "value": "Access Bank" },
  { "label": "FCMB", "value": "First City Monument Bank" },
  { "label": "KEYSTONE", "value": "Keystone Bank" },
  { "label": "SKYE", "value": "Skye Bank" },
  { "label": "STERLING", "value": "Sterling Bank" },
  { "label": "UNION", "value": "Union Bank of Nigeria" },
  { "label": "WEMA", "value": "Wema Bank" },
];

const content = {
  headerTitle: {
    main: "Withdraw",
    bank: "Bank Transfer",
  },
  body: "Efficiently access your earnings and get paid through the available methods",
  tips: {
    noAccount: 'No Account found! Add your Bank Information to withdraw',
  }
};

const withdrawalInfoFields = [
  {id: 'amount', label: "Amount"},
  {id: 'accNum', label: "Account Number" },
  {id: 'bank', label: "Bank" },
  {id: 'accName', label: "Account Name"},
];

//--Mock--//
const withdrawalInfo = {
  amount: "40000",
  accNum: "0167324147",
  bank: "Guaranty Trust Bank",
  accName: "Samuel Abilawon Oluwaseun"
};

const getWithdrawalInfo = (id) => {
  if ( id == 'amount') return addCommas(withdrawalInfo.amount);
  if ( id == 'accNum') return withdrawalInfo.accNum;
  if ( id == 'bank') return withdrawalInfo.bank;
  if ( id == 'accName' ) return withdrawalInfo.accName;
};

const paymentMethods = [
  {id: 'paypal', label: "PayPal", icon: PayPal },
  {id: 'bank', label: "Bank Transfer", icon: Bank },
];



const CashOutModal = () => {
  const { openCashOutModal, setOpenCashOutModal, transferPage, setTransferPage,
   screenSize, setAddBank, bankInfo, setBankInfo, confirmWithdrawal,
    setConfirmWithdrawal } = useStateContext();

   const [bankName, setBankName] = useState(null);
   const [accNum, setAccNum] = useState(null);

  const handleClose = () => setOpenCashOutModal(false);

  const handlePaymentMethod = (id) => {
    if ( id == 'bank') setTransferPage('bank-transfer-main');
  };

  const handleSave = () => setBankInfo({bankName, accNum})

  return (
      <Modal
          open={openCashOutModal}
          onClose={handleClose}
          className='flex flex-col justify-center items-center'
      >
        <div className="flex flex-col md:rounded-[10px] bg-offWhite lg:w-[60%]
          xs:w-[100%] ss:h-[100%] xs:h-[100%] overflow-hidden lg:p-10 md:p-10 xs:px-0 xs:py-10">
          { transferPage == "main" && (
            <>
              <div className='flex flex-col w-full justify-center items-center'>
              <div className='flex flex-row w-full md:mb-10 sm:mb-5 justify-between lg:px-0 xs:px-5 xs:mb-5'>
                      <p className={`${text.subHeading}`}>{content.headerTitle.main}</p>

                      <div className=''>
                          <button
                              className='hover:scale-105 w-[25px] h-[25px] bg-white items-center  justify-center flex rounded-full'
                              onClick={handleClose}
                          >
                              <GrClose />
                          </button>
                      </div>
                  </div>
                <p className='text-sm text-center my-5 w-[85%]'>{content.body}</p>
              </div>

              <div className='flex flex-row grid ss:grid-cols-2 xs:grid-cols-1 gap-6 items-center justify-center h-[50%] px-10'>
                { paymentMethods.map((item, index) => (
                  <button 
                    key={index} 
                    onClick={() => handlePaymentMethod(item.id)}
                    className='flex flex-col w-full bg-white h-48 items-center justify-center hover:scale-110'>
                    <img src={item.icon}/>
                    <p className="mt-4">{item.label}</p>
                  </button>
                ))}
              </div>
            </>
          )}

          { transferPage == "bank-transfer-main" && (
            <>
              <div className='flex flex-col w-full justify-center items-center lg:px-0 md:px-0 xs:px-5'>
                <div className='flex flex-row w-full items-center justify-between border-b-2 pb-5'>
                  <button
                    onClick={() => setTransferPage('main')} 
                    className='w-8 h-8 bg-button rounded hover:scale-110'>
                    <p className='text-white'>{'<'}</p>
                  </button>
                  <p className='text-2xl'>{content.headerTitle.bank}</p>
                  <button
                    onClick={handleClose} 
                    className='w-8 h-8 bg-button rounded hover:scale-110'>
                        <p className='text-white'>x</p>
                  </button>
                </div>

                { !bankInfo.bankName && !bankInfo.accNum && screenSize > 1060 && (
                     <div className='w-full'>
                       <Tips 
                         type="secondary"
                         body={content.tips.noAccount}
                         style={'mb-0'}
                     /> 
                    </div>
                  )
                }

                <div className='flex flex-col w-full  bg-white p-5 ss:px-10 xs:px-5 mt-5'>

                  <div className='flex flex-row items-center justify-between w-full mt-5'>
                    <p className={`${text.subHeading}`}>Bank Info</p>
                    { !bankInfo.bankName && <Button title={'Add Bank'} smallest onClick={() => setAddBank(true)}/> }
                  </div>

                  { !bankInfo.bankName && !bankInfo.accNum ? (
                    <>
                      <div className='flex flex-col grid ss:grid-cols-2 xs:grid-cols-1 gap-4 items-center my-5'>
                        <Select options={banksArr} onChange={ e => setBankName(e.value)} />
                        <input 
                          placeholder="Account Number" 
                          id="accNum" 
                          className='border p-2 rounded'
                          onChange={ e => setAccNum(e.target.value) }
                        />
                      </div>
                      <Button title="Save" smallest onClick={handleSave}/>
                    </>
                  ) :

                  <div className='flex flex-col w-full mt-10'>
                    <div className='flex flex-col w-full'>
                      <div className='flex flex-row w-full border-b-2 pb-2 justify-between'>
                        <p className={`${text.body}`}>Bank Name </p>
                        <p className={`${text.body}`}>Account Number</p>
                        <p className={`${text.body}`}>Amount</p>
                      </div>

                      <div className='flex flex-row w-full py-2 justify-between'>
                        <p className={`${text.normal}`}>{bankInfo.bankName} </p>
                        <p className={`${text.normal}`}>{bankInfo.accNum}</p>
                        <p className={`${text.normal}`}>{addCommas(withdrawalInfo.amount)}</p>
                      </div>
                    </div>

                    <div className='w-full flex flex-col'>
                     
                     {  confirmWithdrawal && (
                        <div className= "border my-10 p-5 flex flex-col items-center justify-center">
                        <p className={`${text.subHeading} mb-5`}>Confirm Withdrawal</p>

                        { withdrawalInfoFields.map((item, index) => (
                            <div key={index} className='flex my-2 flex-row w-full items-center justify-center'>
                              <p className={`${text.body} mr-5 flex-1 text-right`}>{item.label}</p>
                              <p className={`${text.normal} flex-1`}>{getWithdrawalInfo(item.id)}</p>
                            </div>
                        ))}

                        <div className='mt-5 flex flex-row w-full px-10 grid grid-cols-2 gap-5'>
                          <Button outline title="Cancel" smallest onClick={() => setConfirmWithdrawal(false) }/>
                          <Button title="Confirm" smallest/>
                        </div>

                       
                      </div>
                     )}
                     
                     <div className="flex flex-row w-full items-center justify-center mt-10">
                       { !confirmWithdrawal && <Button title="Withdraw" small onClick={() => setConfirmWithdrawal(true)}/>}
                     </div>
                    </div>
                  </div>
                }

                </div>
                    
              </div>
            </>
          )}
        </div>
      </Modal>
  )
}

export default CashOutModal;