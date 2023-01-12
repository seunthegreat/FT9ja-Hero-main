import React, { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar, QuizResult, QuestionCard } from '../components';
import { QuizBG } from '../assets';
import ReactPlayer from 'react-player';
import handleChoiceClick from '../functions/Quiz/handleChoiceClick';

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

const Quiz = () => {

  const [selectedChoice, setSelectedChoice] = useState([]);
  const { activeMenu, page } = useStateContext();


  const handleSelection = (item, number) => {
    const updatedChoice = handleChoiceClick(selectedChoice, item, number);
    setSelectedChoice([...selectedChoice, updatedChoice]);
  };


  return (
    <div className='flex relative w-full'>
      {activeMenu ? (
        <div className='z-20 w-72 fixed dark:bg-secondary-dark-bg bg-white'>
          <Sidebar />
        </div>
      ) : (
        <div className='w-0 dark:bg-secondary-dark-bg'>
          <Sidebar />
        </div>
      )
      }
      <div className={
        `dark:bg-main-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
      >
        <div className='z-10 fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <DNavbar route={"Quiz"}/>
        </div>

        <div className=''>
          { page == 'main' && 
            <QuestionCard
              quizQuestions={quizQuestions}
              handleSelection={handleSelection}
              selectedChoice={selectedChoice}
            /> 
          }
          { page == 'result' && <QuizResult />}
        </div>
      </div>
    </div>
  )
}

export default Quiz