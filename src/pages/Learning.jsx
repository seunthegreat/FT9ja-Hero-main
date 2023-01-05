import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import Videos from '../components/Videos';
import { forexVideos, messages, userProgress } from '../constants';
import styles, {layout, text} from '../style';
import { GrClose } from "react-icons/gr";
import VideoTabBar from '../components/VideoTabBar';
import { getCompletedVideos, getVideosInProgress , completedVideosId, videosInProgressId } from '../functions/Learning';


const completedId = completedVideosId(userProgress);
const inProgressId = videosInProgressId(userProgress);

const all = forexVideos;
const completed = getCompletedVideos(completedId, forexVideos);
const inProgress  = getVideosInProgress(inProgressId, forexVideos);


const { learning } = messages;

const Learning = () => {
  const { activeMenu, showTip, setShowTip, activeTab } = useStateContext();

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

        <div className='flex flex-col w-full bg-[#3B7C4E] lg:pt-0 md:pt-0 sm:pt-10 ss:pt-10 xs:pt-10 px-5'>

          { showTip &&
            <div className='flex flex-col bg-slate-100 p-5 rounded-[5px] lg:mt-5 md:mt-5 sm:mt-10 ss:mt-10 xs:mt-10'>
              <div className='absolute right-10  w-[20px] h-[20px]'>
                <button
                  onClick={() => setShowTip(false)}
                  className='hover:bg-slate-200 p-1 rounded-full'>
                  <GrClose />
                </button>
              </div>
              <p className={`${text.subHeading} mb-2`}>{learning.tip.title}</p>
              <p className={`${text.smallest}`}>{learning.tip.body}</p>
            </div>
          }
        
          <VideoTabBar />
        </div>

        <Videos
          activeMenu={activeMenu} 
          activeTab={activeTab}
          all={all}
          inProgress={inProgress}
          completed={completed}
        />
      </div>

    </div>
  )
}

export default Learning