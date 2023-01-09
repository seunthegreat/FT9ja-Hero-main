import React, { useState } from 'react';
import { choicesLabel } from '../constants';
import { useStateContext } from '../context/ContextProvider';
import handleChoiceClick from '../functions/Quiz/handleChoiceClick';

const Quiz = () => {

  const { currentQuizIndex, setCurrentQuizIndex, attempts,
    selectedChoice, setSelectedChoice, quizQuestions } = useStateContext();

  const currentQuiz =  quizQuestions[currentQuizIndex];

  //--Function handles click the next button--//
  const handleNext = () => {
    setCurrentQuizIndex(currentQuizIndex + 1);
  };

  //--handles clicking the previous button--//
  const handlePrev = () => {
    //--> Decrement the current quiz index
    setCurrentQuizIndex(currentQuizIndex - 1);
  };

  //--handle user choice selection--//
  const handleSelection = (item, number) => {
    const updatedChoice = handleChoiceClick(selectedChoice, item, number);
    setSelectedChoice(updatedChoice);
  };

  return (
    <div className='flex-col flex flex-1 md:w-3/4 sm:w-full h-full bg-dimGreen rounded p-5'>
      <div className='flex flex-row justify-between'>
        <p className="text-ss text-gray-500">Question {currentQuizIndex+1} of { quizQuestions.length} </p>
        <div className='flex flex-row'>
          <p className="text-xs text-gray-500 mr-1">Attempts : </p>
          <p className="text-xs text-black">{attempts.length}</p>
        </div>
      </div>
      { currentQuiz && (
        <>
          <div className={`border border-[#359602] rounded-[20px] py-4 my-5`}>
            <p className='text-[#359602] text-center font-bold'>{currentQuiz.question}</p>
         </div>
        </>
      )}

      <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 
        ss:grid-cols-2 xs:grid-cols-1 gap-2`}>

          {currentQuiz.choices.map((choice, index) => (
            <div
              className={`${choice == selectedChoice[currentQuizIndex] && 'bg-gray-200' } p-4 border rounded-[10px] hover:bg-gray-100`}
              key={index}
              onClick={() => handleSelection(choice, currentQuizIndex)}
              >
               <p className='text-gray-500'>{choicesLabel(index)}. {choice}</p>
            </div>
          ))}
       </div>

    <div className='flex flex-row mt-5 w-full justify-center'>
      {currentQuizIndex > 0 && (
        <button onClick={handlePrev}>
          <div className='p-2 px-3 border rounded mr-5 hover:border-[#359602]'>
            <p className=''>{'< Prev'}</p>
          </div>
        </button>
      )}

      {currentQuizIndex < quizQuestions.length - 1 && (
        <button onClick={handleNext}>
          <div className='p-2 px-3 border rounded hover:border-[#359602]'>
            <p>{'Next >'}</p>
          </div>
        </button>
      )}
    </div>
    
  </div>
  )
}

export default Quiz