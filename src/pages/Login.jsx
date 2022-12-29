import React from 'react';
import { layout, text } from '../style';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  return (
    <section id="login" className={"flex flex-row"}>
      <div className={[layout.sectionInfo, "flex-1 hidden md:block"]}>
        <div className="flex bg-[#246700] h-screen w-full items-center justify-center ">
          <div className="mb-60 bg-gray-200 w-[159px] h-[159px] items-center flex justify-center rounded-full overflow-hidden">
            <img className="w-full h-full object-contain" src={logo} alt="Image" />
          </div>
        </div>
      </div>
      <div className={`flex-1 flex flex-col items-center justify-center h-screen`}>
        <div 
          className="flex flex-col container mx-auto px-4 py-8 items-center justify-center">
          <h2 className={`py-4 ${text.heading} font-bold text-center`}>Welcome Back!</h2>
          <p className={`w-[60%] md:w-[70%] sm:w-[60%] ss:w-[70%] xs:w-[80%] lg:mb-8 xs:mb-0 
          text-center font-light ${text.normal}`}>Kindly fill in your details below</p>
        </div>
        <div className="bg-white px-8 pt-6 pb-8 mb-4 md:w-[70%] sm:w-[80%] ss:w-[90%] xs:w-[100%]">
          <div className="absolute top-10 left-5 hidden md:block">
            <Link to="/">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <FaArrowLeft className="mr-2" />
              </button>
            </Link>
          </div>
          <form>
            <Input label="Email" placeholder="Enter your email address" id="email" type="email"/>
            <Input label="Password" id="password" placeholder="********"/>
            <div className="flex items-center justify-between">
              <label className={`inline-block ${text.normal} text-gray-700 align-baseline flex items-center justify-center`}>
                <input className="form-checkbox mr-1" type="checkbox" /> Remember me
              </label>
              <Link to="/forgot-password" className="inline-block align-baseline font-bold lg:text-sm xs:text-xs text-gray-500 hover:text-blue-800">
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center flex-col justify-between  xs:mt-10">
              <Link to="/dashboard" className='flex w-full'>
                <Button styles="mb-2 lg:mb-0 md:mb-0 sm:mb-0 ss:mb-0 xs:mb-3 w-full" title="Login"/>
              </Link>
              <div className='flex flex-row w-full mt-5 items-center justify-center'>
                <p className={`w-[60%] mb-8 text-center font-light ${text.small}`}>
                  Don't have an account ? 
                  <Link to="/signup" className='font-bold text-[#246700]'>
                    {" "}Sign Up
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

export default Login;