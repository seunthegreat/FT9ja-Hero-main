import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} justify-evenly flex-col bg-secondary`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start md:mr-8 xs:mr-0">
        <img src={logo} alt="ft9ja" className="w-[116px] h-[41.51px]" style={{width: '11'}}/>
        <p className={`${styles.normal} mt-4 md:w-[85%] xs:w-[100%]`}>
          We are Nigeria's 1st next-generational proprietary trading firm. Our aim is to scout 
          for talented but undercapitalized Financial-asset Traders in Nigeria (FT9ja) and empower them. 
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-xs sm:text-[15px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li 
                  key={link.name} 
                  className={`font-poppins font-normal text-xs leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0' }`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className={`w-full flex items-center justify-center pt-20`}>
      <p className="font-poppins font-normal text-center text-[14px] text-dimWhite">
        Copyright FT9JA. All Rights Reserved
      </p>
    </div>
  </section>
)
export default Footer