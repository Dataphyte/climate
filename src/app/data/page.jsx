'use client';

import React, { useState } from 'react';
import Hero from './hero';
import { classNames } from '@/helpers/classNames';

const tableData = [
  { title: 'NIMEC data' },
  { title: 'Projects assigned by FG' },
];

const Page = () => {
  const [isSelected, setIsSelected] = useState('NIMEC data');

  return (
    <div className='flex flex-col items-center w-full  pb-20'>
      <Hero />
      <main className='w-full h-[400px] px-3 md:px-10 lg:px-32 py-10'>
        {/* ======= TABLES SECTIONJ */}
        <section className='w-full flex flex-col gap-10 '>
          <h1 className='text-2xl text-gray-700 font-bold'>Data Tables</h1>

          <div className='flex gap-3 -mt-6'>
            {tableData.map((item, idx) => (
              <div
                key={idx}
                className={classNames(
                  'cursor-pointer py-1 px-5 rounnded-md border shadow duration-300 ease-out hover:shadow-md text-sm border-gray-400',
                  isSelected === item.title && 'text-gray-50 bg-gray-700'
                )}
                onClick={() => setIsSelected(item.title)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* ======= TABLES CONDITIONAL RENDER */}
          {
            {
              'NIMEC data': (
                <div className='table__container'>
                  <iframe
                    title='Climate by state update'
                    aria-label='Table'
                    id='datawrapper-chart-Bb4a4'
                    src='https://datawrapper.dwcdn.net/Bb4a4/1/'
                    style={{ height: '100%', width: '100%' }}
                    data-external='1'
                  ></iframe>
                </div>
              ),
              'Projects assigned by FG': (
                <div className='table__container'>
                  <iframe
                    title='Flood Control and Climate Change Mitigation Projects by FG and State Governments'
                    aria-label='Table'
                    id='datawrapper-chart-gFreb'
                    src='https://datawrapper.dwcdn.net/gFreb/1/'
                    style={{ height: '100%', width: '100%' }}
                    data-external='1'
                  ></iframe>
                </div>
              ),
            }[isSelected]
          }
        </section>
      </main>
    </div>
  );
};

export default Page;
