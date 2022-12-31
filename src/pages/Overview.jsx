import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import { features } from '../constants';
import BenefitCard from '../components/BenefitCard';
import styles, {layout} from '../style';
import { step1 } from '../assets';
import CriteriaList from '../components/CriteriaList';

const steps = [
  {
    'title': "Step One",
    'lottieAnimation': "https://assets7.lottiefiles.com/packages/lf20_tb15abek.json",
    heading: "Attend Class Weekly Class about fT9ja and updates",
     contents: [
      {id: 1, body: "Training on affiliate marketing"},
      {id: 2, body: "Training on digital marketing "},
      {id: 3, body: "Training on digital marketing"},
      {id: 4, body: "Training on direct marketing sales"},
      {id: 5, body: "Testimonials"}
    ],
    heading2: "Pass a quiz about FT9ja Prop Firm",
    extra: [
      {id: 1, body: `Watch at least 60 minutes video in our library on training on affiliate marketing, 
        training on digital marketing, training on digital marketing/Sales monthly`},
    ]
  },
  {
    'title': "Step Two",
    lottieAnimation: "https://assets9.lottiefiles.com/packages/lf20_2uvh7uv0.json",
    heading: "Educate an online group of 1000 Traders or more per month (every 4 weeks) about FT9ja",
     contents: [
      {id: 0, body: "Telegram (members)"},
      {id: 1, body: "Facebook Group (members)"},
      {id: 2, body: "Twitter/Twitter Spaces "},
      {id: 3, body: "Youtube (Subscribers)"},
      {id: 4, body: "Linkedin groups (Members)"},
      {id: 5, body: "Whatsapp (Members)"},
      {id: 6, body: "TikTok"},
      {id: 6, body: "Instagram"},
    ],
    extra: []
  },
  {
    'title': "Step Three",
    lottieAnimation:"https://assets7.lottiefiles.com/packages/lf20_AFxIPvJHjK.json",
    heading: `Community Advocates: 3 instances/events per month (every 4 weeks) of maintaining or creating a positive 
      image of FT9ja in groups, forums and comment sections of online communities with more than 500 people.`,
    contents: [],
    extra: []
  },
  {
    'title': "Step Four",
    lottieAnimation: "https://assets9.lottiefiles.com/private_files/lf30_rmev2zza.json",
    heading: `Super Affiliate: 10 or more referees per month`,
    contents: [],
    extra: []
  },
  {
    'title': "Step Five",
    lottieAnimation: "https://assets10.lottiefiles.com/packages/lf20_ljx86sv6.json",
    heading: `Participate in all monthly activities `,
    contents: [],
    extra: []
  },
]


const Overview = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className='flex relative'>
      {activeMenu ? (
        <div className='z-20 w-72 fixed dark:bg-secondary-dark-bg bg-white'>
          <Sidebar />
        </div>
      ) : (
        <div className='w-0 dark:bg-secondary-dark-bg'>
          <Sidebar />
        </div>
      )
      }

      <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? 'md:ml-72': 'flex-2'}`}
      > 
      <div className='fixed z-10 md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
        <DNavbar route={"Overview"}/>
      </div>

        <div className='flex flex-col'>
          <h2 className="lg:mb-5 md:mb-5 xs:mt-20 lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold text-center">
            Benefits of becoming an Affiliate
          </h2>
          <div className={`${layout.sectionItems} flex-col p-5 mt-0 md:ml-0`}>
            {features.map((feature, index) => (
              <BenefitCard key={feature.id} {...feature} index={index} />
            ))}
          </div>
        </div>

        <div className='flex flex-col px-5'>
          <h2 className="lg:mb-5 md:mb-5 xs:mt-20 lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold text-center">
            How to become a FT9ja Ambassador
          </h2>
            {steps.map((step, index) => (
              <CriteriaList step={step} index={index}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Overview