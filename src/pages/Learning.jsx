import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import VideoCard from '../components/VideoCard';
import { forexVideos } from '../constants';
import styles, {layout, text} from '../style';
import { GrClose } from "react-icons/gr";


const message = `We've compiled a series of videos to help you understand 
  the key elements of successful promotional campaigns and how to effectively market our brand. Whether you're new 
  to the industry or an experienced trader, these resources will provide valuable 
  insights and tips to help you succeed. We hope you find these videos helpful and informative.`

const Videos = ({activeMenu, showTip, setShowTip}) => (
  <div className='flex flex-col h-screen items-center'>
    {/* <div className='flex flex-col h-1/6 w-full bg-red-200'>
     
    </div> */}

    <div className='flex w-full bg-[#3B7C4E] roundedflex flex-col p-5'>
      
      { showTip && 
        <div className='flex flex-col bg-slate-100 p-5 rounded-[5px]'>
          <div className='absolute right-10  w-[20px] h-[20px]'>
            <button
              onClick={() => setShowTip(false)}
              className='hover:bg-slate-200 p-1 rounded-full'>
              <GrClose />
            </button>
          </div>
          <p className={`${text.subHeading} mb-2`}>Welcome to our learning page! </p>
          <p className={`${text.smallest}`}>{message}</p>
        </div>
      }
    </div>
    <div className={`${!activeMenu ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} lg:px-5 w-[90%] grid md:grid-cols-3 
      xs:grid-cols-1 ss:grid-cols-2  mt-8 md:mt-8 md:ml-0`}>
      {forexVideos.map((item, index) =>(
        <VideoCard key={index} item={item}/>
      ))}
    </div>
  </div>
); 

const Learning = () => {
  const { activeMenu, screenSize, showTip, setShowTip } = useStateContext();

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

      <div className='flex bg-[#3B7C4E]'>
        <div className='z-10 fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <DNavbar route={"Learning"}/>
          </div>
        </div>

        <Videos
          setShowTip={setShowTip}
          activeMenu={activeMenu} 
          showTip={showTip}/>
      </div>

    </div>
  )
}

export default Learning