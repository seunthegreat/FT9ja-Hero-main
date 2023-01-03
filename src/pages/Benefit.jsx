import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import styles, { layout, text } from '../style';
import ListCard from '../components/ListCard';
import { ambassadorshipBenefits } from '../constants';
import Button from '../components/Button';
import MiniStatsCard from '../components/MiniStatsCard';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const metricFields = [
  {id: 'total-comm', label: "Total Commission", iconColor: "bg-[#3596021A]", type: 'money'},
  {id: 'monthly-comm', label: "Monthly Commission", iconColor: "bg-[#8000801A]", type: "money"},
  {id: 'merch', label: "FT9a Merch", iconColor: "bg-[#0000FF1A]", type: "merch"},
  {id: 'trips', label: "Trips Won", iconColor: "bg-[#FF00001A]", type: "trips"},
];

const referrals = 2;

const message = {
  custom : `Refer ${4-referrals} more persons and earn N40,000 monthly stipend`,
  oneLeft : "Refer one more person to earn your monthly stipend of N40,000"
}

const calculatePercentage = (referrals) => {
  if (referrals == 1) return 25;
  if (referrals == 2) return 50;
  if (referrals == 3) return 75;
  if (referrals == 4) return 100;
}


const Benefits = () => {
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
            ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
      >
         <div className='z-10 fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <DNavbar route={"Benefit"}/>
        </div>

        <div className='flex flex-col lg:px-10 xs:px-5 sm:mt-20 ss:mt-10 xs:mt-5 md:mt-10'>
          <h2 className="lg:mt-0 hidden sm:block ss:mt-5 xs:mt-10 lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold">
            Benefits
          </h2>

          <div className={`${layout.sectionItems} flex-col mt-8 md:mt-8 md:ml-0 `}>
            <div className='border p-5 rounded-[10px] mb-10'>
              {ambassadorshipBenefits.map((item, index) => (
                <ListCard data={item} key={index} />
              ))}
            </div>

            <div className='h-full'>
              <div className='bg-dimGreen p-4 rounded'>
                <div className='flex flex-row'>
                  <div>
                    <p className={`${text.subHeading}`}>Stipend Commission</p>
                    <p className={`${text.body} mt-2 mb-3 w-[80%]`}>{referrals !== 3 ?  message.custom : message.oneLeft}</p>
                  </div>
                  <div className='w-[100px] h-[100px]'>
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
                  <Button title={"History"} smallest/>
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