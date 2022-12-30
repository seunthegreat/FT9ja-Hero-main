import React from 'react';
import styles, { layout } from '../style';
import { Player } from '@lottiefiles/react-lottie-player';


const CriteriaList = ({step}) => {
  return (
      <div className={`${layout.sectionItems} flex-col p-5 mt-0 md:ml-0 bg-white`}>
          <div className={`flex bg-white mb-4 rounded-full ${styles.flexCenter}`}>
          <Player
            autoplay={true}
            loop={true}
            controls={true}
            src={step.lottieAnimation}
            //style={{ height: '300px', width: '300px' }}
            className="w-[70%] h-[80%] object-contain"
            />
              {/* <img src={step.img} alt="icon" className="w-[100] h-[100%] object-contain" /> */}
          </div>
          <div className="flex-1 flex flex-col ml-3 items-center py-10 px-5">
              <h4 className="font-poppins font-semibold text-center text-black md:text-2xl lg:text-3xl sm:text-xl ss:text-lg leading-[23px] mb-4">
                  {step.title}
              </h4>
              <p className=' w-full m-1 font-poppins font-normal text-gray-500 text-xs leading-[24px]'>{step.heading}</p>
              <ul className="list-inside list-disc w-full">
                  {step.contents.map((content, index) => (
                      <li key={index} className="m-1 font-poppins font-normal text-gray-500 text-xs leading-[24px]">
                          {content.body}
                      </li>
                  ))}
              </ul>
              {(step.extra.length !== 0 && step.extra !== null ) && (
                  <h4 className="m-5 font-poppins font-semibold text-center text-black md:text-2xl lg:text-3xl sm:text-xl ss:text-lg leading-[23px] mb-4">
                      Or
                  </h4>
              )}
              <p className='w-full m-1 font-poppins font-normal text-gray-500 text-xs leading-[24px]'>{step.heading2}</p>
              <ul className="list-inside list-disc w-full">
                  {step.extra.map((content, index) => (
                      <li key={index} className="m-1 font-poppins font-normal text-gray-500 text-xs leading-[24px]">
                          {content.body}
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  )
}

export default CriteriaList