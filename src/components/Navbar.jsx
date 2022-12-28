import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";
import {BiMenuAltRight} from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="FT9ja" className="w-[124px] h-[32px]" />
      
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <NavLink 
            to={`/${nav.id}`} 
            key={nav.id}   
          >
            <li 
              key={nav.id} 
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-black`}>
              { index == 2 ? <Button title={nav.title} small/> : 
                <a href={`#${nav.id}`}>
                  {nav.title}
              </a>}
            </li> 
          </NavLink>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        { 
          !toggle ? 
          <BiMenuAltRight
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          /> : 
          <GrClose
            alt="close"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
        }
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <NavLink 
              to={`/${nav.id}`} 
              key={nav.id}   
            >
              <li 
                key={nav.id} 
                className={`py-2 font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            </NavLink>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar