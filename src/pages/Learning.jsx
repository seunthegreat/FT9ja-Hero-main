import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import VideoCard from '../components/VideoCard';
import { forexVideos } from '../constants';
import styles, {layout} from '../style';


const Videos = ({activeMenu}) => (
  <div className='flex flex-col h-screen p-10 xs:px-4 items-center'>
    {/* <div className='flex flex-col h-1/6 w-full bg-red-200'>
     
    </div> */}
    <div className={`${!activeMenu ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} lg:w-[80%] w-[90%] grid md:grid-cols-3 
      xs:grid-cols-1 ss:grid-cols-2  mt-8 md:mt-8 md:ml-0`}>
      {forexVideos.map((item, index) =>(
        <VideoCard key={index} item={item}/>
      ))}
    </div>
  </div>
); 

const Learning = () => {
  const { activeMenu, screenSize } = useStateContext();
  
  console.log(screenSize);
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
          <DNavbar route={"Learning"}/>
        </div>

        <Videos activeMenu={activeMenu}/>

      </div>
    </div>
  )
}

export default Learning