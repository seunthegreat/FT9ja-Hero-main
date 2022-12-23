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
        className="flex flex-col container mx-auto px-4 py-8 items-center justify-center">
        <h2 className="py-5 text-3xl font-bold mb-4 text-center">Become an Ambassador</h2>
        <p className="w-[60%] mb-8 text-center">{loremIpsum}</p>
        <div className='mb-10 w-[50%]'>
          <form onSubmit={handleSubmit} className={`flex flex-row w-full`}>
            <input 
              type="email" 
              value={email} 
              onChange={handleChange} 
              className={`w-[100%] border px-5 py-4`} 
              placeholder={'Enter your email address'}
            />
           <Button title="Register" small/>
        </form>
        </div>
      </div>
    </section>
  )
}

export default CTA