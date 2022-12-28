import React from 'react';
import { layout, text } from '../style';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { FaArrowLeft } from "react-icons/fa";

const Signup= () => {
  return (
    <section id="signup" className={"flex flex-row"}>
      <div className={[layout.sectionInfo, "flex-1 hidden md:block"]}>
      <div className="flex bg-[#246700] h-screen w-full items-center justify-center">
        <div className="mb-60 bg-gray-200 w-[159px] h-[159px] items-center flex justify-center rounded-full overflow-hidden">
          <img className="w-full h-full object-contain" src={logo} alt="Image" />
        </div>
       </div>
      </div>
      <div className={`flex-1 flex flex-col items-center justify-center`}>
        <div 
          className="flex flex-col container mx-auto px-4 py-8 items-center justify-center">
          <h2 className={`py-4 ${text.heading} font-bold text-center`}>Create an Account</h2>
        </div>
        <div className="bg-white px-8 pt-6 pb-8 mb-4 w-[60%]">
          <div className="absolute top-10 left-5 hidden md:block">
            <Link to="/">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <FaArrowLeft className="mr-2" />
              </button>
            </Link>
          </div>
          <form>
            <Input label="First name" placeholder="" id="first-name"/>
            <Input label="Last Name" placeholder="" id="last-name"/>
            <Input label="Email Address" placeholder="" id="email" type="email"/>
            <Input label="Password" id="password" placeholder=""/>
            <div className="flex items-center justify-between">
              <label className={`inline-block ${text.normal} text-gray-700 align-baseline flex items-center justify-center`}>
                <input className="form-checkbox mr-1" type="checkbox" /> Remember me
              </label>
            </div>
            <div className="flex flex-col items-center justify-between mt-20">
              <Button styles="mb-2 lg:mb-0 md:mb-0 sm:mb-0 ss:mb-0 xs:mb-3 w-full" title="Create account"/>
              <div className='flex flex-row w-full mt-5 items-center justify-center'>
                <p className={`w-[60%] mb-8 text-center font-light ${text.small}`}>
                  Already have an account ? 
                  <Link to="/login" className='font-bold text-[#246700]'>
                    {" "}Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;