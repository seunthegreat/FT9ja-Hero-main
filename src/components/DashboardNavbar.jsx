import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { useStateContext } from '../context/ContextProvider';
import { Home, rightArrow } from '../assets';

const NavButton = ({ title, customFunc, icon, color, dotColor, svg }) => (
  <>
    <button 
      type='button' 
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span style={{background: dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
        {svg ? <img src={icon} className="w-[18px] h-[18px]" /> : icon}
    </button>
  </>
)

const DNavbar = ({route}) => {
  const {  setActiveMenu, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) return setActiveMenu(false);
    setActiveMenu(true);

  }, [screenSize]);
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <div className='flex flex-row items-center justify-center'>
        <NavButton 
          title="Menu" 
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color="gray"
          svg
          icon={Home}
        />
       <img src={rightArrow} className="w-[18px] h-[12px] mr-2" /> 
       <p className='text-xs'>{route}</p>
      </div>
        
        <div className='flex'>
          <NavButton 
            title="Notifications" 
            dotColor={"#03c9d7"}
            customFunc={() => handleClick('notification')}
            color="gray"
            icon={<RiNotification3Line />}
          /> 

        </div>
    </div>
  )
}

export default DNavbar