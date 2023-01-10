import React from 'react';
import { text } from '../style';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const Recommendations = ({data}) => {
  const { setPage, setAttempts, selectedChoice, score, attempts, currentMonthInfo, 
    setSelectedChoice, setCurrentQuizIndex, setQuiz } = useStateContext();

  const attempt = {
    id: attempts + 1,
    quizId: currentMonthInfo.id,
    quizName: currentMonthInfo.name,
    score, 
    selectedChoice
  };

  const handleTryAgain = () => {
    //console.log(attempt);
    setAttempts(prevAttempts => [...prevAttempts, attempt]);
    setQuiz(null);
    setPage('main');
    setSelectedChoice([]); 
    setCurrentQuizIndex(0);
  };

  //console.log(currentMonthInfo)

  return(
    <>
      <div className='flex grid grid-cols-3 gap-2 w-[70%] justify-evenly '>
        {data.map((item, index) => (
          <div key={index} className='border rounded-[10px] px-5 py-2 flex '>
            <div className='flex flex-row items-center'>
              <div className='rounded-full border w-5 h-5 items-center justify-center flex mr-2'>
                <p className={`${text.small}`}>{index + 1}</p>
              </div>
              <p className={`${text.small}`}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='my-5 flex-row flex'>
        <Link to="/dashboard/learning" className='flex flex-col mr-2'>
          <Button title={'Watch Videos'} styles={'rounded-[50px]'} small />
        </Link>
        <Button
          title={"Take Quiz again"}
          styles='rounded-[50px] bg-lightGreen'
          textStyle={'text-black'}
          small
          onClick={handleTryAgain}
        />
      </div>
    </>
  );
}

export default Recommendations;