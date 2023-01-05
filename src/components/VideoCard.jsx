import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import VideoProgressTracker from './VideoProgressTracker';
import { userProgress } from '../constants';
import { text } from '../style';


const VideoCard = ({item}) => {
  const playerRef = useRef(null);

  const handleProgressData = (id) => {
    for(let i = 0 ; i < userProgress.length ; i++ ){
      if ( id == userProgress[i].id) return userProgress[i].status
    }
  };


  return (
    <div className='overflow-hidden mb-4 ss:mr-4 bg-white rounded-[5px] border hover:shadow hover:transform hover:scale-105
      transition duration-100 ease-in-out'>
      <div className='w-full h-[200px] bg-slate-200'>
        <ReactPlayer
          ref={playerRef} 
          url={item.link} 
          width={"100%"} 
          height={"100%"} 
        />
      </div>
      <div className='m-3 p-2'>
        <p className={`${text.normal} font-semibold`}>{item.title}</p>
        <VideoProgressTracker playerRef={playerRef} prevStatus={handleProgressData(item.id)}/>
      </div>
    </div>
  );
}

export default VideoCard;