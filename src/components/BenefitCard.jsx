import React from "react";
import styles from "../style";

const BenefitCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row h-full p-6 rounded-[5px] feature-card ${index === 1 || index === 2 ? 'bg-dimGreen' : 'bg-white border'}`}>
    <div className="flex-1 flex flex-col ml-3 items-center">
      <div className={`w-[64px] h-[64px] bg-white mb-4 rounded-full ${styles.flexCenter}`}>
        <img src={icon} alt="icon" className="w-[100%] object-contain" />
      </div>
      <h4 className="font-poppins font-semibold text-center text-black text-[18px] leading-[23px] mb-4">
        {title}
      </h4>
      <p className="font-poppins font-normal text-center text-gray-500 text-xs leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

export default BenefitCard;