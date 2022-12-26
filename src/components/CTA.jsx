import React, {useState} from "react";
import styles from "../style";
import Button from "./Button";

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
 

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className={``}>
      <div 
        className="flex flex-col container mx-auto px-0 py-8 items-center justify-center">
        <h2 className="py-5 text-3xl font-bold mb-4 text-center">Become an Ambassador</h2>
        <p className="md:w-[60%] lg:w-[60%] sm:w-[70%] ss:w-[80%] mb-8 font-light text-center">{loremIpsum}</p>
        <div className='mb-10 md:w-[50%] lg:w-[50%] xs:w-[100%]'>
          <form onSubmit={handleSubmit} className={`flex md:flex-row lg:flex-row sm:flex-row ss:flex-row xs:flex-col w-full`}>
            <input 
              type="email" 
              value={email} 
              onChange={handleChange} 
              className={`w-[100%] border px-5 py-3 ss:mb-0 sm:mb-0 xs:mb-3`} 
              placeholder={'Enter your email address'}
            />
           <Button title="Register" small square/>
        </form>
        </div>
      </div>
    </section>
  )
}

export default CTA