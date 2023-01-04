import React, { useRef } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import { activities } from '../constants';
import { layout } from '../style';
import ListCard from '../components/ListCard';
import { Document } from '../assets';
import Button from '../components/Button';
import { useDropzone } from 'react-dropzone';

const Activities = () => {
  const { activeMenu } = useStateContext();
  const inputRef = useRef(null);
  const {getRootProps, getInputProps, isDragActive } = useDropzone({noClick: true});
  

  //--function--//
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <div className='flex relative'>
      <input 
        {...getInputProps()}  
          style={{display: 'none'}}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
      {activeMenu ? (
        <div className='z-20 w-72 fixed dark:bg-secondary-dark-bg bg-white'>
          <Sidebar />
        </div>
      ) : (
        <div className=' w-0 dark:bg-secondary-dark-bg'>
          <Sidebar />
        </div>
      )
      }
      <div className={
        `dark:bg-main-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
      >
        <div className='z-10 fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <DNavbar route={"Activities"}/>
        </div>

        <div className='flex flex-col lg:px-10 xs:px-5 sm:mt-20 ss:mt-10 xs:mt-5 md:mt-10'>
          <h2 className="lg:mt-0 hidden sm:block ss:mt-5 xs:mt-10 lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold">
            Activities
          </h2>

          <div className={`${layout.sectionItems} mt-8 md:mt-8 md:ml-0`}>
            <div className='border p-5 rounded-[10px] mb-10'>
              {activities.map((item, index) => (
                <ListCard data={item} key={index} />
              ))}
            </div>

            <div className='h-full'>
              <div className='h-screen  flex flex-col items-center'>
                <div className='h-5/6 xl:h-3/4 lg:w-full w-full border rounded-[10px] m-5 sm:m-0 py-10 flex flex-col items-center'>
                  <h2 className="mb-4 text-3xl xs:text-xl font-bold text-center">Proof Of Activity</h2>
                  <p className="md:w-[100%] lg:w-[75%] sm:w-[70%] ss:w-[80%] xs:w-[70%] mb-8 xs:text-xs lg:text-sm font-light text-center">
                    Send proof of activities completed through images and videos to earn rewards
                  </p>
                  <div className='h-[100%] w-[100%] p-5 overflow-hidden flex flex-col'>
                    <h2 className="text-xl font-normal md:text-xl xs:text-lg">Upload and attach files</h2>
                    <p className='text-gray-500 text-xs sm:mt-4 xs:mt-1'>Upload and attach proof of advocacy</p>
                    <div class="h-full mt-5 p-3 border-dashed border-2 border-gray-400  items-center justify-center flex flex-col">
                      <img src={Document} alt="upload" className="w-[53.31px] h-[72px] mb-4" />
                      <div className="flex items-center justify-between">
                      {!isDragActive && <button onClick={handleClick} className="underline font-semibold text-gray-500 hover:text-gray-800">Click to Upload </button>}
                      {!isDragActive ?
                        <span className="text-gray-500 mx-2 hidden sm:block"> or drag and drop</span> :
                        <span className="text-gray-500 mx-2 hidden sm:block">Dragging file...</span>
                      }
                    </div>
                      <p className='text-gray-500 text-xs mt-4'>Maximum file size of 50mb</p>
                    </div>
                    <div className='bg-red-200 mt-10 flex'>
                      <Button title={"View History"} smallest styles={'absolute right-8'}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities