import React from 'react';
import {bg2} from "../assets";
import ReactPlayer from 'react-player'


const HowItWorks = () => {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  
   return (
    <div 
      className="flex flex-col container mx-auto py-8 items-center justify-center bg-secondary rounded-[10px]">

      <h2 className="py-5 text-3xl text-white font-bold mb-4 text-center">How It Works</h2>
      <p className="w-[60%] text-dimWhite mb-8 text-center">{loremIpsum}</p>
      <div className='mb-10 rounded-[10px] overflow-hidden'>
        <ReactPlayer url='https://www.youtube.com/watch?v=PHe0bXAIuk0' />
      </div>
    </div>
  );
};

export default HowItWorks