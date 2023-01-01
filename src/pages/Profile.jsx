import React from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import { profileBanner, Edit, people01, people02 } from '../assets';
import { text, layout } from '../style';
import AffiliateLink from '../components/AffiliateLink';

const user = {
  firstName : "Samuel",
  lastName : "Abilawon",
  email : "seun.thedeveloper@gmail.com",
  phoneNumber : "+2348168051751"
};

const profileFields = [
  {id: 'fName', label: "First Name",},
  {id: 'lName', label: "Last Name"},
  {id: 'email', label: "Email address"},
  {id: 'phone', label: "Phone number"}
];

const handleData = (id) => {
  if (id === 'fName') return user.firstName;
  if (id === 'lName') return user.lastName;
  if (id === 'email') return user.email;
  if (id === 'phone') return user.phoneNumber;
};

const ProfileData = ({title, id}) => (
  <div className='mb-5'>
    <label className={`block text-gray-700 text-sm font-bold mb-2 ${text.normal}`}>
      {title}
    </label>
    <div
      className="border rounded w-full px-3 text-gray-700 focus:outline-none 
        focus:shadow-outline  border px-5 py-4 ss:mb-0 sm:mb-0 xs:mb-3"
    >
      <div className='flex justify-between'>
        <p className='font-poppins font-normal  text-gray-500 text-sm leading-[24px]'>{handleData(id)}</p>
        <button className='pointer'>
          <img src={Edit} className="h-15 w-15" alt="Edit" />
        </button>
      </div>
    </div>
  </div>
);

const Profile = () => {
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
        <div className='fixed md:static bg-main-bg z-10 dark:bg-main-dark-bg navbar w-full'>
          <DNavbar route={"Profile"}/>
        </div>
        <div className='flex flex-col px-10 xs:px-5 sm:mt-20 ss:mt-10 xs:mt-5 md:mt-10'>
          <h2 className="lg:mt-0 hidden sm:block ss:mt-5 xs:mt-10 lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold">
            Profile
          </h2>
          <div className='lg:my-10 xs:mt-20 ss:mt-10 rounded-[5px] border overflow-hidden'>
            <img src={profileBanner} className="h-[80%] w-full hidden sm:block" alt="Profile banner" />
            <div className='m-10 flex flex-row items-center'>
              <img src={people02} className="w-[78px] h-[78px] rounded-full bg-gray-200" alt="Avi" />
              <div className='flex flex-col items-right ml-3'>
                <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23px]">
                  Samuel Abilawon
                </h4>
                <p className="font-poppins font-normal  text-gray-500 text-xs leading-[24px]">
                  Admin
                </p>     
              </div> 
            </div>

            <div className={`${layout.sectionItems} flex-col mr-10 sm:ml-10 ss:mx-5 xs:mx-5 lg:mt-10 xl-mt-10`}>
              { profileFields.map((item, index) => (
                <ProfileData title={item.label} key={index} id={item.id}/>
                ) 
              )}
            </div>

            <div className={`${layout.sectionItems} flex-col mr-10 sm:ml-10 ss:mx-5 xs:mx-5`}>
              <AffiliateLink containerStyle={'mb-20'}/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile