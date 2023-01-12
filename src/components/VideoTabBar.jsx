import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { tabs } from '../constants';

const VideoTabBar = () => {

  const { activeTab, setActiveTab, showLearningTip } = useStateContext();

  return (
    <div className={`${!showLearningTip && 'mt-20' } flex flex-row items-center justify-center`}>
      {tabs.map((item, index) => (
        <button
          onClick={() => setActiveTab(item.value)}
          className={`${activeTab == item.value ? 'bg-secondary' : 'bg-gray-100 opacity-80'} py-2 px-5 border-white 
          rounded-[10px] mr-2 hover:bg-secondary`}
          key={index}>
          <p className={`${activeTab == item.value ? 'font-semibold text-white' : 'font-light'} text-black
            lg:text-sm md:text-sm ss:text-ss xs:text-xs hover:text-white`}>{item.label}</p>
        </button>
      ))}
    </div>
  )
}

export default VideoTabBar