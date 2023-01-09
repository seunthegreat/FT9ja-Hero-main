import React, { useCallback, useRef } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import { useDropzone } from 'react-dropzone';
import { Document } from '../assets';

const Advocate = () => {
  const { activeMenu } = useStateContext();
  const inputRef = useRef(null);
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive } = useDropzone({noClick: true});

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

   // console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    //console.log(event.target.files);

    // 👇️ can still access file object here
    //console.log(fileObj);
    //console.log(fileObj.name);
  };

  return (
   <section id="advocate">
     <div className='flex relative' {...getRootProps()}>
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

          <DNavbar route={"Advocate"}/>

          <div className='h-screen lg:p-10 md:p-10 sm:p-10 xs:p-10 flex flex-col items-center'>
            <div className='h-5/6 xl:h-3/4 lg:w-full w-full border rounded-[10px] m-5 sm:m-0 py-10 flex flex-col items-center'>
              <h2 className="mb-4 text-3xl xs:text-xl font-bold text-center">Proof Of Advocacy</h2>
              <p className="md:w-[60%] lg:w-[60%] sm:w-[70%] ss:w-[80%] xs:w-[70%] mb-8 xs:text-xs lg:text-sm font-light text-center">
                Send proof of advocacy through images and videos to maintain advocacy status and earn rewards
              </p>
                <div className='h-[100%] xl:w-[80%] w-[90%] lg:w-[60%] md:w-[100%] p-5 overflow-hidden flex flex-col'>
                  <h2 className="text-xl font-normal md:text-xl xs:text-lg">Upload and attach files</h2>
                  <p className='text-gray-500 text-xs sm:mt-4 xs:mt-1'>Upload and attach proof of advocacy</p>
                  <div class="h-full mt-5 p-3 border-dashed border-2 border-gray-400  items-center justify-center flex flex-col">
                    <img src={Document} alt="upload" className="w-[53.31px] h-[72px] mb-4" />
                    <div className="flex items-center justify-between">
                      {!isDragActive && <button onClick={handleClick} className="underline font-semibold text-gray-500 hover:text-gray-800">Click to Upload </button>}
                      { !isDragActive ? 
                       <span className="text-gray-500 mx-2 hidden sm:block"> or drag and drop</span> : 
                       <span className="text-gray-500 mx-2 hidden sm:block">Dragging file...</span>
                       }
                    </div>
                    <p className='text-gray-500 text-xs mt-4'>Maximum file size of 50mb</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Advocate