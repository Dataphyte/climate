import React from 'react';
import Hero from '@/components/hero';

const Page = () => {
  return (
    <div>
      <Hero
        content='Climate Resources'
        cta='view sandbox'
        ctaLink='map-sandbox'
      />
    </div>
  );
};

export default Page;
