import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { text, layout } from '../style';
import { useStateContext } from '../context/ContextProvider';
import { QuizTimer, QuizCalendar, Tips, Button, Quiz} from './index';
import { search } from '../functions/Quiz';
import { tips } from '../constants';

const choicesLabel = (index) => {
  if (index == 0 ) return 'A';
  if ( index == 1 ) return 'B';
  if ( index == 2 ) return 'C';
  if ( index == 3 ) return 'D';
  if ( index == 4 ) return 'E';
};

const QuizCompleted = () => (
  <div className='flex-1 md:w-3/4 sm:w-full h-full bg-dimGreen rounded flex-col justify-center flex items-center'>
    <h1 className={`${text.subHeading} my-2`}>Quiz Complete!</h1>
    <h1 className={`${text.body}`}>Click on the submit button to continue!</h1>
  </div>
);




const getDuration = (x) => {
  let hours = Math.floor(x / 60);
  let minutes = Math.floor(x % 60);
  let seconds = Math.round((x % 1) * 60);
  return { hours, minutes, seconds };
};

const QuestionCard = ({handleSelection, selectedChoice}) => {

  const { showQuizTip, setShowQuizTip, quiz, setQuiz , 
    setTime, timer,  quizDuration, setShowCalendar, 
    currentMonthInfo, history, passMark } = useStateContext();

  const duration = getDuration(quizDuration);

  const handleStart = () => {
    setShowCalendar(false); //--> Hide Calendar
    setQuiz('start');
    timer.current = setInterval(()=> {
      setTime((prevTime) => prevTime - 1);
    }, 1000)
  };

  const getQuizSummary = () => {
    let { id } = currentMonthInfo;
    let result = search(id, history, 'quizId');
  };

  const quizSummary = getQuizSummary();

  const sendMsg = () => {
    console.log("Completed")
  }
  useEffect(() => {
   
  },[])

  return (
    <div className='mx-5 flex flex-col'>
      
      <div className='sm:mt-10 ss:mt-20 lg:mt-0 md:mt-0 mb-5'>
        {showQuizTip &&
          <Tips
            title={tips.quiz.general.title}
            body={tips.quiz.general.body}
            onClick={() => setShowQuizTip(false)}
          />
        }
      </div>

      <div className='flex flex-col border rounded-[10px] h-[100%]  items-center'>
  
        <div className='flex flex-col  px-10 mt-10  w-full'>
          <QuizCalendar />
            <Tips 
              type="secondary"
              body={ quiz == null && tips.quiz.beforeQuiz || quiz == 'completed' && tips.quiz.afterQuiz } 
            /> 
        </div>

        <div className='flex flex-col w-full px-10 my-5'>
          <div className='flex flex-row  w-full items-center justify-between'>
            <div className='flex flex-row'>
              <p className={`text-ss mr-2 text-gray-500`}>{currentMonthInfo.month} Quiz </p>
            </div>

              <Button
                title={quiz == null && 'Start' || quiz == 'start' && 'In Progress' || currentMonthInfo.score >= passMark && 'Completed' }
                smallest styles={'rounded-[50px]'}
                onClick={ !quiz ? handleStart : currentMonthInfo.score && currentMonthInfo.score >= passMark && sendMsg }
              />
            
          </div>

          { currentMonthInfo.attempts > 0 && (
            <div className={`bg-lightGreen mt-3 px-5 flex flex-col py-5`}>

              {currentMonthInfo.score < 60 && <Tips type="secondary" body={tips.quiz.failedQuiz} />}
              <div className='flex mt-3'>
              <div className='flex flex-row mr-2'>
                <div className='w-[200px] h-[100px] px-2 flex-wrap justify-center bg-white rounded-[5px] flex flex-col items-center'>
                  <p className={`${text.small} text-gray-500`}>Name</p>
                  <p className='text-base font-semibold mt-2 text-center'>{currentMonthInfo.name}</p>
                </div>
              </div>
              <div className='flex flex-row mr-2'>
                <div className='w-[100px] h-[100px] justify-center bg-white rounded-[5px] flex flex-col items-center'>
                  <p className={`${text.small} text-gray-500`}>Score</p>
                  <p className='text-base font-semibold mt-2'>{currentMonthInfo.score}%</p>
                </div>
              </div>

              <div className='flex flex-row mr-2'>
                <div className='w-[100px] h-[100px] justify-center bg-white rounded-[5px] flex flex-col items-center'>
                  <p className={`${text.small} text-gray-500`}>Attempts</p>
                  <p className='text-base font-semibold mt-2'>{currentMonthInfo.attempts}</p>
                </div>
              </div>

              <div className='flex flex-row mr-2'>
                <div className='w-[100px] h-[100px] justify-center bg-white rounded-[5px] flex flex-col items-center'>
                  <p className={`${text.small} text-gray-500`}>Time Spent</p>
                  <p className='text-base font-semibold mt-2'>{currentMonthInfo.timeSpent} mins</p>
                </div>
              </div>

              <div className='flex flex-row mr-2'>
                <div className='w-[120px] h-[100px] justify-center bg-white rounded-[5px] flex flex-col items-center'>
                  <p className={`${text.small} text-gray-500`}>Date</p>
                  <p className='text-base font-semibold mt-2'>{currentMonthInfo.date}</p>
                </div>
              </div>
              </div>
              
            </div>
          )}
        </div>

        <div className='flex lg:flex-row md:flex-row sm:f ss:flex-col ss:flex-col-reverse  ss:flex-col w-full ss:p-5'>
        
          { quiz === 'start' && (
            <>
              <Quiz />
              <QuizTimer />
            </>
          )}
           {/* <QuizCompleted /> */}
        </div>
      </div>
  
    </div>
  )
}

export default QuestionCard