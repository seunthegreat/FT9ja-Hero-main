import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar, Tips, HistoryModal } from '../components';
import styles, { layout, text } from '../style';
import ListCard from '../components/ListCard';
import { ambassadorshipBenefits } from '../constants';
import Button from '../components/Button';
import MiniStatsCard from '../components/MiniStatsCard';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { trackBenefits } from '../assets';
import { tips } from '../constants';
import Modal from '@mui/material/Modal';

const metricFields = [
  {id: 'total-comm', label: "Total Stipend", iconColor: "bg-[#3596021A]", type: 'money'},
  {id: 'monthly-comm', label: "Referral Commission", iconColor: "bg-[#8000801A]", type: "money"},
  {id: 'merch', label: "FT9a Merch", iconColor: "bg-[#0000FF1A]", type: "merch"},
  {id: 'trips', label: "Gifts and Offers", iconColor: "bg-[#FF00001A]", type: "trips"},
];

const referrals = 2;

const message = {
  custom : `Refer ${4-referrals} more persons and earn N40,000 monthly stipend`,
  oneLeft : "Refer one more person to earn your monthly stipend of N40,000",
  trackBenefits: "Track all you benefits earned and stipend progress here!"
};

const calculatePercentage = (referrals) => {
  if (referrals == 1) return 25;
  if (referrals == 2) return 50;
  if (referrals == 3) return 75;
  if (referrals == 4) return 100;
};

const Benefits = () => {
  
  const { activeMenu, showBenefitsTip, setShowBenefitsTip, setOpenPaymentHistory, openPaymentHistory } = useStateContext();
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
            ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
      >
         <div className='z-10 fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <DNavbar route={"Benefit"}/>
        </div>

        { openPaymentHistory && <HistoryModal type='payment'/> }

        <div className='flex flex-col w-full px-5'>
          {showBenefitsTip &&
            <Tips
              title={tips.benefits.general.title}
              body={tips.benefits.general.body}
              onClick={() => setShowBenefitsTip(false)}
            />
          }

          <div className={`${layout.sectionItems} ${showBenefitsTip ? 'lg:mt-0' : 'lg:mt-20 xs:mt-20'}
            mt-0 md:mt-8 md:ml-0`}>
            <div className='border p-5 rounded-[10px] mb-10'>
              {ambassadorshipBenefits.map((item, index) => (
                <ListCard data={item} key={index} />
              ))}
            </div>

            <div className='h-full'>
              <div className='bg-[#359602] p-4 rounded mb-3'>
                <div className='flex flex-row justify-between'>
                  <div>
                    <p className={`${text.subHeading} text-white`}>Track Benefits</p>
                    <p className={`${text.body} mt-2 mb-3 w-[90%] xl:w-full text-slate-200`}>{message.trackBenefits}</p>
                  </div>
                  <div className='w-[150px] h-[100px] hidden sm:block'>
                    <img src={trackBenefits}/>
                  </div>
                </div>
              </div>
              <div className='bg-dimGreen p-4 rounded'>
                <div className='flex md:flex-row lg:flex-row xl:flex-row justify-between sm:flex-col ss:flex-col'>
                  <div>
                    <p className={`${text.subHeading}`}>Upcoming Commission</p>
                    <p className={`${text.body} mt-2 mb-3 w-[80%]`}>{referrals !== 3 ?  message.custom : message.oneLeft}</p>
                  </div>
                  <div className='w-[100px] h-[100px] sm:my-5 ss:my-5'>
                    <CircularProgressbar 
                      value={calculatePercentage(referrals)} 
                      text={`${calculatePercentage(referrals)}%`} 
                      styles={buildStyles({
                        pathColor:"#359602",
                        textColor: "#359602",
                        trailColor:"#6EDA444D"
                      })}  
                    />
                  </div>
                </div>
                <div className='flex flex-row'>
                  <Button title={"Cashout"} smallest styles={'mr-2'}/>
                  <Button title={"History"} smallest onClick={() => setOpenPaymentHistory(true)}/>
                </div>
              </div>

              <div className={`${layout.sectionItems} mt-3 md:mt-3 md:ml-0`}>
                {metricFields.map((item, index) => (
                  <MiniStatsCard key={index} item={item}/>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits