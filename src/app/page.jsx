import React from 'react';
import HomeHero from './homeHero';

const Page = () => {
  return (
    <div className='w-full min-h-screen flex items-center flex-col'>
      <HomeHero />
      <main></main>
    </div>
  );
};

export default Page;
