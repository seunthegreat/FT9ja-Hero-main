import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar, Videos, VideoTabBar, Tips } from '../components';
import { forexVideos, messages, userProgress, tips } from '../constants';


const completedVideosId = (userProgress) => {
  const completed = [];
  for ( let i = 0; i < userProgress.length; i++) {
    if (userProgress[i].status === 100) completed.push(userProgress[i])
  }
  return completed;
};

const videosInProgressId = (userProgress) => {
  const inProgress = [];
  for (let i = 0; i < userProgress.length; i++ ){
    if (userProgress[i].status > 0 && userProgress[i].status < 100) inProgress.push(userProgress[i])
  }
  return inProgress;
};

const completedId = completedVideosId(userProgress);
const inProgressId = videosInProgressId(userProgress);

const getCompletedVideos = (completedId, forexVideos) => {
  //--Create a Set of the video IDs of the completed videos--//
  const completedVideoIds = new Set(completedId.map(video => video.id));
  //--Filter the allVideos array to return a new array with only the completed videos--//
  return forexVideos.filter(video => completedVideoIds.has(video.id));
};

const getVideosInProgress = (inProgressId, forexVideos) => {
  //--Create a Set of the video IDs of the videos in progress--//
  const videosInProgressId = new Set(inProgressId.map(video => video.id));
  //--Filter the allVideos array to return a new array with only the completed videos--//
  return forexVideos.filter(video => videosInProgressId.has(video.id));
};

const all = forexVideos;
const completed = getCompletedVideos(completedId, forexVideos);
const inProgress  = getVideosInProgress(inProgressId, forexVideos);


const { learning } = messages;

const Learning = () => {
  const { activeMenu, showLearningTip, setShowLearningTip, activeTab } = useStateContext();

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

      <div className='flex'>
        <div className='z-10 fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <DNavbar route={"Learning"}/>
          </div>
        </div>

        <div className='flex flex-col w-full  px-5'>

          { showLearningTip &&
            <Tips
              title={tips.learning.general.title}
              body={tips.learning.general.body}
              onClick={() => setShowLearningTip(false)}
            />
          }
      
        </div>
        
        <VideoTabBar />
        
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