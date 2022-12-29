import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar } from '../components';


const Overview = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className='flex relative'>
      {activeMenu ? (
        <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white'>
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
            ${activeMenu ? 'md:ml-72': 'flex-2'}`}
      > 
      Overview
      </div>
    </div>
  )
}

export default Overview