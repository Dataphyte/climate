import { PaperClipIcon } from '@heroicons/react/20/solid';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MapIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ResourceDetail = ({ state, setState, stateObject }) => {
  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={setState}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto w-full'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 w-full'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 w-full'>
                <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
                  <div className='px-4 py-5 sm:px-6'>
                    {/* ====== CLOSE BUTTON */}
                    <button onClick={() => setState(false)}>
                      <ArrowUturnLeftIcon
                        className='w-5 h-5 text-rose-500 absolute right-6 top-3'
                        strokeWidth={2}
                      />
                    </button>
                    <h3 className='text-lg font-medium leading-6 text-gray-900 flex gap-2 items-center'>
                      <MapIcon className='w-6 h-6 text-gray-700' />
                      State Information
                    </h3>
                    <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                      Gathered information and resource sources for state
                    </p>
                  </div>
                  <div className='border-t border-gray-200'>
                    <dl>
                      {/* ====== STATE */}
                      <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          State
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          {stateObject.state}
                        </dd>
                      </div>

                      {/* ====== NUMBER OF LGA */}
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Number of LGAs
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          {stateObject.no_of_lga}
                        </dd>
                      </div>

                      {/* ====== LIST OF LGA AFFECTED */}
                      <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          LGA affected
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex gap-2'>
                          {stateObject &&
                            stateObject.lga_affected.map((lga, index) => (
                              <p
                                key={index}
                                className='w-max bg-blue-100 py-0.5 px-3 rounded-xl shadow text-gray-700'
                              >
                                {lga}
                              </p>
                            ))}
                        </dd>
                      </div>

                      {/* ====== DEARHS */}
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Number of Deaths
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          {stateObject.no_of_deaths}
                        </dd>
                      </div>

                      {/* ====== INJURED */}
                      <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Number of Injured
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          {stateObject.no_of_injured}
                        </dd>
                      </div>

                      {/* ====== DISPLACED */}
                      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Number of Displaced
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          {stateObject.no_of_displaced}
                        </dd>
                      </div>

                      {/* ====== LINKS */}
                      <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                        <dt className='text-sm font-medium text-gray-500'>
                          Reference Links
                        </dt>
                        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                          <ul
                            role='list'
                            className='divide-y divide-gray-200 rounded-md border border-gray-200 bg-white'
                          >
                            {stateObject &&
                              stateObject.ref_link.map((link, index) => (
                                <li
                                  className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'
                                  key={index}
                                >
                                  <div className='flex w-0 flex-1 items-center'>
                                    <PaperClipIcon
                                      className='h-5 w-5 flex-shrink-0 text-gray-400'
                                      aria-hidden='true'
                                    />
                                    <span className='ml-2 w-0 flex-1 truncate'>
                                      {link.post_title} - &nbsp;
                                      <em className='text-gray-600 text-sm font-light'>
                                        {link.source}
                                      </em>
                                    </span>
                                  </div>
                                  <div className='ml-4 flex-shrink-0'>
                                    <Link
                                      href={link.link}
                                      className='font-medium text-indigo-600 hover:text-indigo-500'
                                      target='_blank'
                                    >
                                      Visit
                                    </Link>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ResourceDetail;
