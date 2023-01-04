import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import { activities } from '../constants';
import { layout } from '../style';
import ListCard from '../components/ListCard';
const Activities = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className='flex relative'>
      {activeMenu ? (
        <div className='z-20 w-72 fixed dark:bg-secondary-dark-bg bg-white'>
          <Sidebar />
        </div>
      ) : (
        <div className=' w-0 dark:bg-secondary-dark-bg'>
          <Sidebar />
        </div>
      )
      }
      <div className={
        `dark:bg-main-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
      >
        <div className='z-10 fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <DNavbar route={"Activities"}/>
        </div>

        <div className='flex flex-col lg:px-10 xs:px-5 sm:mt-20 ss:mt-10 xs:mt-5 md:mt-10'>
          <h2 className="lg:mt-0 hidden sm:block ss:mt-5 xs:mt-10 lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold">
            Activities
          </h2>

          <div className={`${layout.sectionItems} mt-8 md:mt-8 md:ml-0`}>
            <div className='border p-5 rounded-[10px] mb-10'>
              {activities.map((item, index) => (
                <ListCard data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities