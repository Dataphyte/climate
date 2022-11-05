import React from 'react';
import HomeHero from './hero';
import HomeSwiper from '@/components/HomeSwiper';

const Page = () => {
  return (
    <div className='w-full min-h-screen flex gap-5 items-center flex-col bg-gray-100'>
      <HomeHero />

      {/* ======= BOTTOM SECTION */}
      <section className='w-full  min-h-[500px]  mt-64 lg:mt-0 px-3'>
        <h3 className='font-bold text-3xl text-gray-700'>Quick Charts</h3>
        <div>
          <HomeSwiper />
        </div>
      </section>
    </div>
  );
};

export default Page;

// trend of nigerias rainfaLL
// nigerias GHG emissions
// Key natural hazard statistics
// A place for resouirces

// change as of today tp 2022 flood in nigeria by data
