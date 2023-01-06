import React from 'react';
import ReactPlayer from 'react-player';
import { text } from '../style';
import Button from './Button';
import Tips from './Tips';
import { useStateContext } from '../context/ContextProvider';

const choicesLabel = (index) => {
  if (index == 0 ) return 'A';
  if ( index == 1 ) return 'B';
  if ( index == 2 ) return 'C';
  if ( index == 3 ) return 'D';
  if ( index == 4 ) return 'E';
};

const quizQuestions = [
  {
    type: "text",
    question: "What is the capital of France?",
    choices: [
      "London",
      "Paris",
      "Rome",
      "Berlin",
      "Madrid"
    ],
    answer: "Paris"
  },
  {
    type: "image",
    question: "Which of the following is a type of bear?",
    choices: [
      "Gorilla",
      "Lion",
      "Panda",
      "Tiger",
      "Wolf"
    ],
    answer: "Panda",
    image: "example.com"
  },
  {
    type: "video",
    question: "What is the process by which plants make their own food?",
    choices: [
      "Fertilization",
      "Photosynthesis",
      "Germination",
      "Respiration",
      "Metamorphosis"
    ],
    answer: "Photosynthesis",
    video: "https://www.youtube.com/watch?v=PHe0bXAIuk0"
  }
];

const tip = `Take a quiz and score over 60% to become eligible for your monthly stipends!`

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

const timerFields = [
  {id: 0, label: 'Hours', value: "hours"},
  {id: 1, label: 'Minutes', value: "minutes"},
  {id: 2, label: 'Seconds', value: "seconds"},
];


const getDuration = (x) => {
  let hours = Math.floor(x / 60);
  let minutes = Math.floor(x % 60);
  let seconds = Math.round((x % 1) * 60);
  return { hours, minutes, seconds };
};


const currentMonth = "January";

const QuestionCard = ({handleSelection, selectedChoice}) => {

  const { showQuizTip, setShowQuizTip, quiz, setQuiz , time, setTime, timer,  quizDuration } = useStateContext();

  const duration = getDuration(quizDuration);

  const handleStart = () => {
    setQuiz('start');
    timer.current = setInterval(()=> {
      setTime((prevTime) => prevTime - 1);
    }, 1000)
  };

  const handleStop = () => {
    clearInterval(timer.current);
    setQuiz(null);
    setTime(quizDuration * 60);
  }

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  return (
    <div id="questions" className='flex flex-col flex-col h-screen m-5'>
      {/* {quizQuestions.map((item, number) => (
        <div className='xl:w-[85%] w-full border rounded-[10px] p-5 py-20 mb-5 flex flex-col items-center'>
          <div className='xl:w-[70%] lg:w-[85%] w-full'>
            <h2 className="text-3xl xs:text-xl font-bold">Question {number + 1} of {quizQuestions.length}</h2>
  
              { item.image &&
                <div>
                  <img src={item.image} className="w-200 h-200" />
                </div>
              }
  
              { item.video &&
                <div className='my-5 flex flex-col justify-center items-center'>
                  <div className='rounded-[10px] overflow-hidden lg:w-1/2 md:w-1/2 sm:w-[70%] ss:w-[90%] xs:w-[90%]'>
                    <ReactPlayer url={item.video} width={"100%"} />
                  </div>
                </div>
              }
  
  
              <div className={`bg-white py-5 ${!item.video && 'my-10'}  ${!item.image && 'my-10'}`}>
                <p className='text-gray-500 text-center font-bold'>{item.question}</p>
              </div>
  
              { item.choices.map((item, index) => (
                <div
                  className={`${item === selectedChoice[number] ? 'bg-gray-200' : 'bg-white'} p-5 mt-5 border rounded-[10px] hover:bg-gray-100`}
                  key={index}
                  onClick={() => handleSelection(item, number)}
                >
                  <p className='text-gray-500'>{choicesLabel(index)}. {item}</p>
                </div>
              ))}
          </div>
        </div>
      ))} */}
  
      <div className='flex flex-col border rounded-[10px] h-[100%]  items-center'>
  
        <div className='flex flex-col w-full px-10 mt-10'>
          <p className={`${text.subHeading} `}>Quiz Taken : 0 </p>
          <div className='mt-5 px-10 flex flex-row items-center'>
            {months.map((item, index) => (
              <>
                <div className={`${currentMonth == item.label && 'border-4 border-[#359602]'} rounded-full w-10 h-10 items-center justify-center flex border`}>
                  <p className={`${text.small} ${currentMonth == item.label && 'text-[#359602] font-semibold'} text-gray-500`}>{item.value}</p>
                </div>
                { (index !== (months.length-1) ) && 
                  <div className={`${currentMonth == item.label & ''} border-b-2 border-red w-20`} /> 
                }
              </>
            ))}
          </div>
          { showQuizTip && <Tips body={tip} onClick={() =>setShowQuizTip(false)}/> }
        </div>

        <div className='flex flex-row  w-full px-10 items-center justify-between my-5'>
          <p className={`${text.subHeading} `}>Monthly Quiz : February </p>
          <Button 
            title={quiz == null && 'Start' || quiz == 'start' && 'In Progress'} 
            small styles={'rounded-[50px]'}
            onClick={() => handleStart()}
          />
        </div>

        <div className='flex flex-row h-full w-full'>
          <div className='flex-1 w-3/4 h-full bg-red-200 justify-center flex'>
             Questions go here
          </div>

          <div className='flex-2 flex flex-col w-1/4 px-2'>
            <div className='flex flex-col items-center bg-dimGreen p-4 rounded'>
              <p className={`${text.subHeading} mb-3`}>Duration - {quizDuration} minutes</p>
              <div className='w-full flex flex-row my-5 justify-center '>
                {timerFields.map(((item, index) => (
                  <div className={`flex flex-col items-center  ${index !== timerFields.length - 1 && 'mr-2'}`}>
                    <div className='flex w-[30px] p-8 h-[40px] justify-center items-center rounded-[20px] border'>
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
              

              <div className='flex flex-col w-full'>
                <Button 
                  title={'Submit'}
                  small
                  onClick={() => handleStop()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default QuestionCard