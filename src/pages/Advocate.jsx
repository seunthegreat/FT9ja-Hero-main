import React, {useCallback} from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Sidebar, DNavbar } from '../components';
import {useDropzone} from 'react-dropzone';
import { Document } from '../assets';

const Advocate = () => {
  const { activeMenu } = useStateContext();
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='flex relative' {...getRootProps()}>
      {activeMenu ? (
        <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white'>
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
         <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <DNavbar route={"Advocate"}/>

          <div className='h-screen p-10'>
            <div className='h-[75%] bg-gray-100 flex flex-col items-center'>
              <h2 className="mb-4 mt-10 text-3xl font-bold text-center">Proof Of Advocacy</h2>
              <p className="md:w-[60%] lg:w-[60%] sm:w-[70%] ss:w-[80%] mb-8 font-light text-center">
                Send proof of advocacy through images and videos to maintain advocacy status and earn rewards
              </p>

              <input {...getInputProps()} />
              {/* <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
                } */}
                <div className='w-[50%] h-[70%] bg-white p-5 overflow-hidden flex flex-col justify-center'>
                  <h2 className="text-xl font-normal">Upload and attach files</h2>
                  <p className='text-gray-500 text-xs mt-4'>Upload and attach proof of advocacy</p>
                  <div class="m-2 mt-5 border-dashed border-2 border-gray-400 h-[60%] items-center justify-center flex flex-col">
                    <img src={Document} alt="upload" className="w-[53.31px] h-[72px] mb-4" />
                    <div className="flex items-center justify-between">
                      {!isDragActive && <button className="underline font-semibold text-gray-500 hover:text-gray-800">Click to Upload </button>}
                      { !isDragActive ? 
                       <span className="text-gray-500 mx-2"> or drag and drop</span> : 
                       <span className="text-gray-500 mx-2">Dragging file...</span>
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
  )
}

export default Advocate