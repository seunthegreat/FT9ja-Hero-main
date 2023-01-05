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
    
   return (
    <div className='flex flex-col items-center'>
      <div className="relative w-full h-1 rounded-full overflow-hidden my-5">
         <ProgressBar 
          completed={!progress ? 0 : progress} 
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