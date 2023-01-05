import React, { useState, useEffect } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { text } from '../style';

const VideoProgressTracker = (props) => {

  const { playerRef, prevStatus } = props;
  //--State--//  
  const [progress, setProgress] = useState(prevStatus);
  const [duration, setDuration] = useState(0);
    
  useEffect(() => {
    const player = playerRef.current;
      
    player.props.onProgress((state) => {
      setProgress(state.playedSeconds);
      setDuration(state.loadedSeconds);
    });
    }, [playerRef]);

   //const percentage = `${(progress / duration) * 100}%`
    
   return (
    <div className='flex flex-col items-center'>
      <div className="relative w-full h-1 rounded-full overflow-hidden my-5">
      {/* <div className="bg-purple-500 absolute left-0 top-0 bottom-0 w-full h-full" style={{ width: `${(progress / duration) * 100}%` }}></div> */}
        <ProgressBar 
          completed={progress} 
          bgColor={'#359602'}
          baseBgColor={'rgba(228, 228, 228, 0.6)'}
          isLabelVisible={false}
          height={'3px'}
        />
      </div>
      <p className={`${text.smallest} text-gray-500`}>{!prevStatus ? 0 : prevStatus }% Completed</p>
    </div>
  );
};

export default VideoProgressTracker