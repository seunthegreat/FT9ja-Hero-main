import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';


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
      <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        <DNavbar route={"Overview"}/>
      </div>
      </div>
    </div>
  )
}

export default Overview