import React, { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
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

const choicesLabel = (index) => {
  if (index == 0 ) return 'A';
  if ( index == 1 ) return 'B';
  if ( index == 2 ) return 'C';
  if ( index == 3 ) return 'D';
  if ( index == 4 ) return 'E';
};


const Quiz = () => {

  const [selectedChoice, setSelectedChoice] = useState([]);
  const { activeMenu } = useStateContext();

  const handleSelection = (item, number) => {
    const updatedChoice = handleChoiceClick(selectedChoice, item, number);
    setSelectedChoice([...selectedChoice, updatedChoice]);
  }


  return (
    <div className='flex relative'>
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

        <div>
          <div id="quiz-banner" className='' style={{backgroundImage: QuizBG }}>
           
          </div>

          <div id="timer">

          </div>

          <div id="questions" className='flex flex-col xs:p-5 xs:mt-20 lg:mt-0 md:mt-0 p-10 items-center'>
            {quizQuestions.map((item, number) => (
              <div className='xl:w-[85%] w-full border rounded-[10px] p-5 py-20 mb-5 flex flex-col items-center'>
                <div className='xl:w-[70%] lg:w-[85%] w-full'>
                  <h2 className="text-3xl xs:text-xl font-bold">Question {number+1}</h2>

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

                  {item.choices.map((item, index) => (
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
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Quiz