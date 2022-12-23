import React from 'react';
import styles from "./style";

import { bg } from "./assets"
import { Navbar, Hero, Benefits, HowItWorks, CTA,  Footer } from './components';
import Faqs from './components/Faqs';

const App = () =>(
  <div className={'bg-primary w-full overflow-hidden'}>
   <div style= {{backgroundImage : `url(${bg})`}}>
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
   </div>

    <div className={`bg-primary  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Benefits />
        <HowItWorks />
        <Faqs />
        <CTA />
        <Footer />
      </div>
    </div>
    
  </div>
);

export default App