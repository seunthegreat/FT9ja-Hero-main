import React from 'react';
import Button from './Button';
import { text } from '../style';
import { useStateContext } from '../context/ContextProvider';
import { calculateQuizResult } from '../functions/Quiz';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    quizQuestions, setPage, setScore } = useStateContext();

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  const handleStop = () => {
    const result = calculateQuizResult( quizQuestions, selectedChoice);
    if (result.error) return showToastMessage(result.message);

    console.log(result);
    clearInterval(timer.current);
    setQuiz(null);
    setPage('result');
    setScore(result.score);
    setTime(quizDuration * 60);
  }

 
  return (
    <div className='flex-2 flex flex-col lg:w-1/4 md:w-1/4 px-2 ss:w-full'>
    <div className='flex md:flex-col items-center justify-evenly bg-dimGreen p-4 rounded ss:flex-row'>
      <p className={`text-sm text-gray-500 lg:mt-5 md:text-center sm:text-ss mb-3 md:w-full lg:w-full ss:w-[40%]`}>Duration - {quizDuration} minutes</p>
      <div className='w-full ss:[40%] flex flex-row my-5 justify-center '>
        {timerFields.map(((item, index) => (
          <div key={index} className={`flex flex-col items-center  ${index !== timerFields.length - 1 && 'mr-2'}`}>
            <div className='flex p-5 lg:p-4 justify-center items-center rounded-[15px] lg:rounded-[20px] border'>
              <p className={`${text.heading} font-semibold`}>
                {item.value == 'hours' && hours}
                {item.value == 'minutes' && minutes}
                {item.value == 'seconds' && seconds}
              </p>
            </div>
            <p className={`${text.body} mt-3`}>{item.label}</p>
          </div>
        )))}
      </div>
      

      <div className='flex flex-col w-full ss:w-[40%] lg:w-full'>
        <Button 
          title={'Submit'}
          small
          styles={'lg:rounded ss:rounded-[50px]'}
          onClick={() => handleStop()}
        />
      </div>
      <ToastContainer />
    </div>
  </div>
  )
}

export default QuizTimer