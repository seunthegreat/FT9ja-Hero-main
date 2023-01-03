import React from 'react';
import { text } from '../style';

const metrics = {
  totalCommission: 120000,
  monthlyCommission: 80000,
  merch: 23,
  trips: 5
};

const handleMetricsData = (id) => {
  if (id === 'total-comm') return metrics.totalCommission;
  if (id === 'monthly-comm') return metrics.monthlyCommission;
  if (id === 'merch') return metrics.merch;
  if (id === 'trips') return metrics.trips;
};

const addCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const MiniStatsCard = ({item}) => (
  <div className='bg-dimGreen p-4 rounded flex flex-col items-center justify-center'>
    <div className='flex flex-row items-center justify-center'>
      <div className={`w-[28px] h-[28px] rounded-full mx-2 ${item.iconColor}`}>

      </div>
      <p className={`${text.normal} text-gray-500`}>{item.label}</p>
    </div>
    <div className='p-5'>
      <p className={`${text.subHeading}`}>{item.type == "money" && "N"} {addCommas(handleMetricsData(item.id))}</p>
    </div>
  </div>
);

export default MiniStatsCard