import React from 'react';
import { text } from '../style';
import Button from './Button';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const Recommendations = ({data}) => {
  const { setPage } = useStateContext();

  return(
    <div className='flex grid grid-cols-3 gap-2 w-[70%] justify-evenly '>
      {data.map((item, index) => (
        <div className='border rounded-[10px] px-5 py-2 flex '>
          <div className='flex flex-row items-center'>
            <div className='rounded-full border w-5 h-5 items-center justify-center flex mr-2'>
              <p className={`${text.small}`}>{index+1}</p>
            </div>
            <p className={`${text.small}`}>{item.title}</p>
          </div>
      </div>
      ))}
      <Link to="/dashboard/learning" className='flex flex-col'>
        <Button title={'Watch Videos'} styles={'rounded-[50px]'}/>
      </Link>
      <Button 
        title={"Take Quiz again"} 
        styles='rounded-[50px] bg-lightGreen'
        textStyle={'text-black'}
        onClick={() => setPage('startQuiz')}
      />
    </div>
  );
}

export default Recommendations;