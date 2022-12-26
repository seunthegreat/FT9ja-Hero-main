import React from 'react';
import Button from './Button';
import { bg } from '../assets';
import { Disclosure, Transition } from '@headlessui/react';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { useRef } from 'react';
import { faqs } from '../constants';

const Faqs = () => {
  const buttonRefs = useRef([]);
  const openedRef = useRef(null);

  const clickRecent = (index) => {
    const clickedButton = buttonRefs.current[index]
    if (clickedButton === openedRef.current) {
      openedRef.current = null
      return
    }
    if (Boolean(openedRef.current?.getAttribute('data-value'))) {
      openedRef.current?.click()
    }
    openedRef.current = clickedButton
  }

  return (
    <div style= {{backgroundImage : `url(${bg})`}} className="">
      <div 
        className="flex flex-col container mx-auto px-4 py-8 items-center justify-center">
        <h2 className="py-5 text-3xl font-bold text-center">Frequently asked questions</h2>
        <p className="w-[60%] mb-8 text-center">Have questions? We're here to help</p>
      </div>

      <div className="lg:mx-auto md:ml-10 sm:ml-10 ss:ml-10 xs:mx-10 grid grid-cols-1 gap-5 lg:max-w-screen-md">
          {faqs.map(({ id, question, list, answer, lists }, idx) => (
            <Disclosure key={id}>
              {({ open }) => (
                <>
                  <div key={id}>
                    <Disclosure.Button
                      as="div"
                      className="text-md pb-8 border-b w-full cursor-pointer lg:font-bold md:font-bold sm:font-bold"
                    >
                      <button
                        className="flex w-full justify-between text-left"
                        data-value={open}
                        ref={(ref) => {
                          buttonRefs.current[idx] = ref
                        }}
                        onClick={() => clickRecent(idx)}
                      >
                        {question}
                        {open ? (
                          <span className="md:mr-10 sm:mr-10 ss:mr-5 lg:mr-0 hidden sm:block rounded-full border-[1px] border-slate-300 p-1.5">
                            <BiMinus />
                          </span>
                        ) : (
                          <span className="md:mr-10 sm:mr-10 ss:mr-5 lg:mr-0 hidden sm:block rounded-full border-[1px] border-slate-300 p-1.5">
                            <BsPlusLg />
                          </span>
                        )}
                      </button>
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      {open && (
                        <Disclosure.Panel
                          static
                          className="my-2 flex w-full flex-col justify-between rounded-lg"
                        >
                          {answer && answer}
                          {list && (
                            <ul className="ml-3 list-item">
                              {list.map(({ id, title }) => (
                                <li className="ml-2 list-disc py-1" key={id}>
                                  {title}
                                </li>
                              ))}
                            </ul>
                          )}
                          {lists &&
                            lists.map(({ id, title, line, litems }) => (
                              <div key={id}>
                                <h1 className="py-4 text-[#28a745]">
                                  {title}
                                </h1>
                                {line && <p className='py-2'>{line}</p>}
                                {litems.map(({ id, li, more }) => (
                                  <>
                                    <li key={id} className="py-2">{li}</li>
                                    {more &&
                                      more.map(({ id, text }) => (
                                        <p key={id} className="pl-6 py-1">{text}</p>
                                      ))}
                                  </>
                                ))}
                              </div>
                            ))}
                        </Disclosure.Panel>
                      )}
                    </Transition>
                  </div>
                </>
              )}
            </Disclosure>
          ))}
        </div>
        <div className='w-full items-center justify-center flex py-20'>
        <Button title="JOIN US"/>
        </div>
    </div>
  )
}

export default Faqs