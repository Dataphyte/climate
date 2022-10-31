'use client';

import React from 'react';
import HomeMainChart from '../components/cards/homeMainChart';
import HomeHero from './homeHero';

const Page = () => {
  return (
    <div className='w-full min-h-screen flex items-center flex-col'>
      <HomeHero />

      {/* ======= MAIN CONTENT */}
      <main className='w-full flex flex-col gap-6 items-center'>
        <div className='w-full h-auto min-h-[1000px] grid grid-cols-4 gap-3 justify-items-center mt-44 lg:mt-72 xl:mt-12'>
          <section className='col-span-4 lg:col-span-2 w-full h-full border-r border-gray-500'>
            <HomeMainChart />
          </section>
          <aside className='col-span-4 lg:col-span-2  w-full h-full min-h-[500px] lg:mt-44'>
            <iframe
              src='https://flo.uri.sh/visualisation/11642146/embed'
              title='Interactive or visual content'
              className='flourish-embed-iframe'
              style={{ width: '100%', height: '100%' }}
              sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
            ></iframe>
          </aside>
        </div>

        <div className='w-full flex items-center justify-center my-12 h-[750px] bg-main-color'>
          <div className='shadow-2xl flex w-[90%] h-[600px] bg-white '>
            <iframe
              width='100%'
              height='600'
              frameborder='0'
              allowfullscreen
              src='https://arcg.is/0vfiuL0'
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
