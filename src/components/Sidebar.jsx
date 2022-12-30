import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logo, Home } from "../assets";
import { MdOutlineCancel } from 'react-icons/md';

import { SidebarLinks } from '../constants';
import { useStateContext } from '../context/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize} =  useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 1060) setActiveMenu(false)
  }
  
  const activeLink = 'mb-5 bg-[#E8F4EA] rounded-l-lg flex items-center gap-5 pl-4 pt-3 pb-2.5 text-black text-md ml-2';
  const normalLink = 'mb-5 flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md dark:text-gray-500 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className='pl-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 md:shadow z-50'>
      {activeMenu && (
        <>
        <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-black text-slate-900">
              <img src={logo} alt="FT9ja" className="w-[124px] h-[32px]" />
            </Link>

            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              // style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {SidebarLinks.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink 
                    to={`/dashboard/${link.route}`} 
                    key={link.name} 
                    onClick={handleCloseSideBar}
                    className={({isActive}) => isActive ? activeLink : normalLink }  
                  >
                    {link.icon}
                    <span className="capitalize">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
      </>
      )}
    </div>
  )
}

export default Sidebar