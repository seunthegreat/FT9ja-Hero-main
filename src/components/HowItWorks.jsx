import React from 'react';
import {bg2} from "../assets";
import ReactPlayer from 'react-player'


const HowItWorks = () => {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  
   return (
    <div 
      className="flex flex-col lg:my-20 md:my-20 sm:my-10 xs:my-10 mx-5 py-8 items-center justify-center bg-secondary rounded-[10px]">

      <h2 className="py-5 text-3xl font-bold mb-4 text-center text-white">How It Works</h2>
      <p className="lg:w-[60%] md:w-[70%] sm:w-[80%] ss:w-[80%] px-10 text-dimWhite mb-8 text-center font-light">{loremIpsum}</p>
      <div className='mb-10 rounded-[10px] overflow-hidden lg:w-1/2 md:w-1/2 sm:w-[70%] ss:w-[90%] xs:w-[90%]'>
        <ReactPlayer url='https://www.youtube.com/watch?v=PHe0bXAIuk0'  width={"100%"}/>
      </div>
    </div>
  );
};

export default HowItWorks