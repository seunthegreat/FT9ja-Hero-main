const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading: `xs:mt-10 font-poppins font-semibold text-3xl text-black lg:text-left 
      md:text-left sm:text-center ss:text-center xs:text-center xs:leading-[40px] w-full`,
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-gray-600 text-[18px] leading-[30.8px]",
    normal: "font-poppins font-normal text-dimWhite text-[15px] leading-[25px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY} px-10`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionItems: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative 
      grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2 xs:grid-cols-1 gap-4`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;