import React from 'react';
import { text } from '../style';
import Button from "../components/Button";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useStateContext } from '../context/ContextProvider';
import Recommendations from './Recommendations';

const QuizResult = () => {

  const { setPage, score, currentMonthInfo, selectedChoice, attempts, setAttempts, 
    setSelectedChoice, setCurrentQuizIndex } = useStateContext();

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
    setPage('main');
    setSelectedChoice([]); 
    setCurrentQuizIndex(0);
  };
  

  const passed = {
    title: 'Congratulations',
    body: "You passed and are now eligible to earn your monthly stipends"
  };

  const failed = {
    title: "Sorry, you did not pass the quiz",
    body: `Unfortunately, you did not meet the passing criteria for this quiz.
        We recommend you watch the following video resources to improve your chances next time.`
  };

  const recommendations = [
    {id: 0, title: "What is Prop Trading?"},
    {id: 1, title: "Why traders need a larger account?"},
    {id: 2, title: "Risk Management"},
    {id: 3, title: "Fundamental Analysis"}
  ];
  
  return(
    <div id="results" className='m-5 flex flex-col h-screen'>
      <div className='flex flex-col border rounded-[10px] justify-center items-center 
                      md:mt-0 sm:mt-20 xs:mt-20'>
        <p className={`${text.heading} font-semibold md:my-10 xs:my-10`}>{score >= 60 ? passed.title : failed.title}</p>
        <div className='w-[100px] h-[100px] sm:my-10 ss:my-5 xs:my-5'>
          <CircularProgressbar 
            value={score} 
            text={`${score}%`} 
            styles={buildStyles({
            pathColor:"#359602",
            textColor: "#359602",
            trailColor:"#6EDA444D"
            })}  
          />
        </div>

        <p className={`${text.body} mb-5 md:w-[50%] xs:w-[85%] text-center`}>{score >= 60 ? passed.body : failed.body}</p>
        
        { score >= 60 ? 
          <div className='flex flex-col'>
            <Button 
              title={"Take Quiz again"} 
              styles='rounded-[50px] mb-2'
              onClick={handleTryAgain}
            />
            <Button 
              title={"Go Home"} 
              textStyle={'text-black'}
              styles='rounded-[50px] bg-lightGreen'
              onClick={() => setPage('main')}
            />
           </div> : <Recommendations data={recommendations}/>
        }
      </div>
    </div>
  );
}

export default QuizResult