import Hero from '@/components/hero';
import React from 'react';

const Page = () => {
  return (
    <div className='w-full min-h-screen'>
      <Hero
        content={
          <>
            View <b>Climate</b> <br />
            reports
          </>
        }
        cta='visit Dataphyte'
        ctaLink='https://dataphyte.com'
      />
    </div>
  );
};

export default Page;
