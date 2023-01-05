import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { tabs } from '../constants';
import { text } from '../style';

const VideoTabBar = () => {

  const { activeTab, setActiveTab } = useStateContext();

  return (
    <div className='mt-10 flex flex-row items-center justify-center'>
      {tabs.map((item, index) => (
        <button
          onClick={() => setActiveTab(item.value)}
          className={`${activeTab == item.value ? 'bg-teal-50' : 'bg-teal-50 opacity-80'} py-2 px-5 border-white 
          rounded-[10px] mb-2 mr-2`}
          key={index}>
          <p className={`${activeTab == item.value ? 'font-semibold' : 'font-light'} text-black
            lg:text-sm md:text-sm ss:text-ss xs:text-xs`}>{item.label}</p>
        </button>
      ))}
    </div>
  )
}

export default VideoTabBar