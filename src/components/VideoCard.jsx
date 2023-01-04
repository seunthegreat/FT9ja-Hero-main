import React from 'react';
import ReactPlayer from 'react-player';

const VideoCard = ({item}) => (
  <div className='overflow-hidden mb-4 ss:mr-4 bg-white rounded-[5px] border hover:shadow hover:transform hover:scale-105
    transition duration-100 ease-in-out'>
    <div className='w-full h-[139px] bg-slate-200'>
      <ReactPlayer url={item.link} width={"100%"} height={"100%"} />
    </div>
    <div className='m-3'>
      <p>{item.title}</p>
    </div>
  </div>
);

export default VideoCard;