import styles from '../style';
import Button from './Button';

const Hero = (props) => (
  <section id="home" style = {{backgroundImage: props.backgroundImage }}>
    <div className={`flex justify-center items-center flex-col ${styles.paddingY}`}>
      <h1 className="text-5xl font-bold text-center text-gray-800 md:text-6xl lg:text-7xl xl:text-8xl ">Become A Hero</h1>
      <p className="lg:w-[60%] md:w-[60%] sm:w-[70%] ss:w-[80%] xs:w-[80%] text-gray-600 font-light mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-center px-4 py-6">Become an Affiliate Marketer and Earn up 20% Commission while referring Traders to FT9ja. Track your referral program without platform and high-touch implementation</p>
      <div className="flex justify-center flex-col lg:flex-row md:flex-row sm:flex-row ss:flex-row">
        <Button styles="mx-5 mb-2 lg:mb-0 md:mb-0 sm:mb-0 ss:mb-0 xs:mb-3" title="Become An Affiliate"/>
        <Button styles="mx-5" title="Watch How it Works" outline/>
      </div>
    </div>
  </section>
)

export default Hero