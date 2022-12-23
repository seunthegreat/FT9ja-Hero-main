import styles from '../style';
import Button from './Button';

const Hero = (props) => (
  <section id="home" style = {{backgroundImage: props.backgroundImage }}>
    <div className={`flex justify-center items-center flex-col ${styles.paddingY}`}>
      <h1 className="text-[100px] font-bold text-center text-black mb-4 ">Become A Hero</h1>
      <p className="text-xl w-[60%] font-light text-center text-gray-600 mb-6">Become an Affiliate Marketer and Earn up 20% Commission while referring Traders to FT9ja. Track your referral program without platform and high-touch implementation</p>
      <div className="flex justify-center">
        <Button styles="mt-10 mx-5" title="Become An Affiliate"/>
        <Button styles="mt-10 mx-5" title="Watch How it Works" outline/>
      </div>
    </div>
  </section>
)

export default Hero