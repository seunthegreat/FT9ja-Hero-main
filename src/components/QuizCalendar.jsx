import React, { useEffect, useState } from 'react';
import { text } from '../style';
import { useStateContext } from '../context/ContextProvider';
import { getDateString, search } from '../functions/Quiz';
import { months } from '../constants';
import { BiChevronDown } from "react-icons/bi";

const QuizCalendar = () => {

  const { showCalendar, setShowCalendar, history, setSelectedMonth, setCurrentMonthInfo, 
    quizRecord, currentMonthInfo, screenSize } = useStateContext();
  const [eligibleMonths, setEligibleMonths] = useState([]);

  const smallDevice = screenSize <= 1060 && screenSize >= 768;


  const handleCalendarToggle = () => {
    if (showCalendar) return setShowCalendar(false);
    setShowCalendar(true);
  }

  const convertToMonth = (date) => {
    //--Create a new Date object from the date string--//
    const dateObj = new Date(date);

    //--Get the month number (0-11)--//
    let monthNum = dateObj.getMonth();

    //--an array of month names--//
    let monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

    //--Return the name of the month--//
    return monthNames[monthNum];
  };

  const getEligibleMonths = (history) => {
    let eligibleMonths = [];

    let month = '';
    let score = 0;
    for ( let i=0; i < history.length; i++){
      month = convertToMonth(history[i].date)
      score = history[i].score;
      eligibleMonths.push({month, score });
    }

    return eligibleMonths
  };

  const handleMonthSelection = (item) => {
    let query = item.label;
    let result = search(query, quizRecord, 'month');
   

    let { id } = result;
    let userRecord = search(id, history, 'quizId');
    const info = {
      id: result.id,
      name: result.name,
      description: result.description,
      month: result.month,
      score: userRecord ? userRecord.score : 0,
      attempts: userRecord ? userRecord.attempts : 0,
      timeSpent: userRecord ? userRecord.timeSpent : 0,
      date: userRecord ? userRecord.date : 0,
    };
    setCurrentMonthInfo(info);
    setSelectedMonth(item.label);
  };



  useEffect(()=> {
    setEligibleMonths(getEligibleMonths(history));
  },[])

  const isEligible = (label, index) => {
    return eligibleMonths[index].month == label && eligibleMonths[index].score >= 60 && true;
  }
  return (
    <div className=''>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row'>
          <p className={`${!showCalendar ? 'text-gray-500' : 'text-black'} text-ss`}>History</p>
        </div>
        <button 
          onClick={handleCalendarToggle}
          className='border p-2 sm:px-4 xs:px-2 rounded-[10px] hover:border-[#359602] 
            flex flex-row items-center'>
          <p className={`${text.small} hidden sm:block`}>{ showCalendar ? 'Hide' : 'Show'}</p>
          <BiChevronDown size={20}/>
        </button>
       
      </div>
      {showCalendar && (
        <div className='mt-5 flex w-full grid md:grid-cols-12 sm:grid-cols-9 ss:grid-cols-9 xs:grid-cols-6'>
          {months.map((item, index) => (
            <button 
              onClick={() => handleMonthSelection(item)}
              key={index} 
              className='flex flex-row items-center xs:mb-2 sm:mb-4 ss:mb-4'>
              <div className={`${eligibleMonths[index] ?  isEligible(item.label, index) ? 'border-2 border-[#359602]' : 'border-2 border-red-200' : 
                'border-gray-200'} rounded-full w-10 h-10 items-center justify-center 
                flex border hover:scale-105 `}>
                <p className={`${text.small} ${currentMonthInfo.month == item.label && 'text-slate-900 font-semibold'} text-gray-500`}>{item.value}</p>
              </div>
              {(index !== (months.length - 1)) &&
                <div className={`${eligibleMonths[index] ?  isEligible(item.label, index) ? 'border-[#359602]' : 'border-red-200' : 
                'border-gray-200'} border-b-2 sm:w-5 md:w-full flex-1 hidden sm:block
                 ${smallDevice && index == 8 && 'border-b-0'}`} />
              }
            </button>
          ))}
        </div>
      )}
    </div>
  )
};

export default QuizCalendar;