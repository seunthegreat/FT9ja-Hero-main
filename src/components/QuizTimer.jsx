import React from 'react';
import Button from './Button';
import { text } from '../style';
import { useStateContext } from '../context/ContextProvider';
import { calculateQuizResult, search } from '../functions/Quiz';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const today = new Date();

const timerFields = [
  {id: 0, label: 'Hours', value: "hours"},
  {id: 1, label: 'Minutes', value: "minutes"},
  {id: 2, label: 'Seconds', value: "seconds"},
];

const showToastMessage = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT
  });
};

const QuizTimer = () => {
  const { quizDuration, setQuiz , time, setTime, timer, selectedChoice,  
    quizQuestions, setPage, setScore, passMark, setHistory, currentMonthInfo,
    attempts, setShowCalendar, quizRecord, history, setCurrentMonthInfo } = useStateContext();

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  const handleStop = () => {
    const result = calculateQuizResult( quizQuestions, selectedChoice);
    const {error, score} = result;
    if (error) return showToastMessage(result.message);
    
    clearInterval(timer.current);

    const { month } = currentMonthInfo;
    let update = updateCurrentMonthInfo(month, quizRecord, score, attempts);
  
    setQuiz('completed');
    setPage('result');
    setScore(result.score);
    setTime(quizDuration * 60);
    setShowCalendar(true); //--> Make calendar visible
    setCurrentMonthInfo(update);

    if ( score >= passMark) {
     const newRecord = { 
       id: history.length + 1, 
       //date: new Date(), 
       date: '04/11/2022',
       quizId: currentMonthInfo.id, 
       quizName: currentMonthInfo.name, 
       score, 
       timeSpent: 30, 
       attempts: attempts.length + 1,
       selectedChoice
     };

     setHistory(prev => [...prev, newRecord])
    }
  };

  const updateCurrentMonthInfo = (query, record, score, attempts) => {
    let result = search(query, record, 'month');
    let { id, name, description, month } = result;
  
    const info = { id, name, description, month,
      score, attempts, timeSpent: 30, date: '04/11/2022' };
    
    return info;
  }



 
  return (
    <div className='flex-2 flex flex-col lg:w-1/4 md:w-1/4 sm:ml-3 ss:w-full '>
      <div className='flex md:flex-col items-center justify-evenly  bg-dimGreen p-4 rounded ss:flex-row'>
        <p className={`text-sm text-gray-500 lg:mt-5 md:text-center sm:text-ss mb-3 md:w-full lg:w-full 
        ss:w-full xs:w-full`}>Duration - {quizDuration} minutes</p>
        <div className='w-full ss:[40%] flex flex-row my-5 justify-center '>
          {timerFields.map(((item, index) => (
            <div key={index} className={`flex flex-col items-center  ${index !== timerFields.length - 1 && 'mr-2'}`}>
              <div className='flex p-3 w-full justify-center items-center rounded-[15px] lg:rounded-[15px] border'>
                <p className={`${text.subHeading} font-semibold`}>
                  {item.value == 'hours' && hours}
                  {item.value == 'minutes' && minutes}
                  {item.value == 'seconds' && seconds}
                </p>
              </div>
              <p className={`${text.body} mt-3`}>{item.label}</p>
            </div>
          )))}
        </div>


        <div className='flex flex-col w-full ss:w-[40%] lg:w-full hidden ss:block'>
          <Button
            title={'Submit'}
            small
            styles={'lg:rounded ss:rounded-[50px]'}
            onClick={() => handleStop()}
          />
        </div>
        <ToastContainer />
      </div>

      {selectedChoice.length > 0 && (
        <div className='bg-dimGreen ss:hidden sm:hidden md:hidden lg:hidden xl:hidden sm:block 
        flex flex-col w-full p-3 xs:duration-300 xs:ease-in-out'>
          <Button
            title={'Submit'}
            small
            styles={'lg:rounded ss:rounded-[50px]'}
            onClick={() => handleStop()}
          />
        </div>
      )}
  </div>
  )
}

export default QuizTimer