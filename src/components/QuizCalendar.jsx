import React, { useEffect, useState } from 'react';
import { text } from '../style';
import { useStateContext } from '../context/ContextProvider';
import { search } from '../functions/Quiz';

const months = [
  { id: 1, label: "January", value: "Jan" },
  { id: 2, label: "February", value: "Feb" },
  { id: 3, label: "March", value: "Mar" },
  { id: 4, label: "April", value: "Apr" },
  { id: 5, label: "May", value: "May" },
  { id: 6, label: "June", value: "Jun" },
  { id: 7, label: "July", value: "Jul" },
  { id: 8, label: "August", value: "Aug" },
  { id: 9, label: "September", value: "Sep" },
  { id: 10, label: "October", value: "Oct" },
  { id: 11, label: "November", value: "Nov" },
  { id: 12, label: "December", value: "Dec" }
];

const currentMonth = "January";

const QuizCalendar = () => {

  const { showCalendar, setShowCalendar, history, setSelectedMonth, setCurrentMonthInfo, 
    quizRecord, currentMonthInfo } = useStateContext();
  const [eligibleMonths, setEligibleMonths] = useState([]);

  const handleCalendarToggle = () => {
    if (showCalendar) return setShowCalendar(false);
    setShowCalendar(true);
  }

  const convertToMonth = (date) => {
    //--Create a new Date object from the date string--//
    const dateObj = new Date(date);

    //--format the date using Intl.DateTimeFormat method--//
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObj);
  
    return month;
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
    <div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row'>
          <p className={`${!showCalendar ? 'text-gray-500' : 'text-black'} text-ss`}>History</p>
          {/* <p className='text-black text-ss ml-2'>{' '}{history.length}</p> */}
        </div>
        <button 
          onClick={handleCalendarToggle}
          className='border p-2 px-4 rounded-[10px] hover:border-[#359602]'>
          <p className={`${text.small}`}>{ showCalendar ? 'Hide' : 'Show'}</p>
        </button>
      </div>
      {showCalendar && (
        <div className='mt-5 flex w-full'>
          {months.map((item, index) => (
            <button 
              onClick={() => handleMonthSelection(item)}
              key={index} 
              className='flex flex-row items-center'>
              <div className={`${eligibleMonths[index] ?  isEligible(item.label, index) ? 'border-2 border-[#359602]' : 'border-2 border-red-200' : 
                'border-gray-200'}
                rounded-full w-10 h-10 items-center justify-center flex border hover:scale-105`}>
                <p className={`${text.small} ${currentMonthInfo.month == item.label && 'text-[#359602] font-semibold'} text-gray-500`}>{item.value}</p>
              </div>
              {(index !== (months.length - 1)) &&
                <div className={`${eligibleMonths[index] ?  isEligible(item.label, index) ? 'border-[#359602]' : 'border-red-200' : 
                'border-gray-200'} border-b-2 sm:w-5 md:w-8`} />
              }
            </button>
          ))}
        </div>
      )}
    </div>
  )
};

export default QuizCalendar;