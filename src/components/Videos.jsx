import React from 'react';
import VideoCard from './VideoCard';

const Videos = ({activeMenu, activeTab, all, inProgress, completed}) => (
  <div className='flex flex-col h-screen items-center'>
    <div className={`${!activeMenu ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} lg:px-5 w-[90%] grid md:grid-cols-3 
      xs:grid-cols-1 ss:grid-cols-2  mt-8 md:mt-8 md:ml-0`}>
      
      {activeTab == 'all' && all.map((item, index) =>(
        <VideoCard key={index} item={item}/>
      ))}
  
      {activeTab == 'inProgress' && inProgress.map((item, index) =>(
        <VideoCard key={index} item={item}/>
      ))}

      {activeTab == 'completed' && completed.map((item, index) =>(
        <VideoCard key={index} item={item}/>
      ))}
      
    </div>
  </div>
); 

export default Videos