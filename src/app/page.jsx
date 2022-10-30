import React from 'react';
import HomeHero from './homeHero';

const Page = () => {
  return (
    <div className='w-full min-h-screen flex items-center flex-col'>
      <HomeHero />

      {/* ======= MAIN CONTENT */}
      <main className='w-full h-auto min-h-[1000px] bg-red-500 grid grid-cols-4 gap-3 justify-items-center'>
        <section className='col-span-4 lg:col-span-2 bg-green-400 w-full h-full'></section>
        <aside className='col-span-4 lg:col-span-2 bg-orange-400 w-full h-full'></aside>
      </main>
    </div>
  );
};

export default Page;
