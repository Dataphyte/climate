'use client';

import React, { useEffect, useState } from 'react';
import Hero from '@/components/hero';
import useResources from '@/hooks/sanity-hooks/useResources';
import StateResourceCard from '@/components/cards/state-resource-card';
import ResourceDetail from '@/components/pop-ups/resourceDetail';
import Footer from '@/components/footer';

const Page = () => {
  const resources = useResources();
  const [infopad, setInfopad] = useState(false);
  const [currentState, setCurrentState] = useState(null);

  // ======= Monitor resources changes -->
  useEffect(() => {
    console.log(resources);
  }, [resources]);

  return (
    <div>
      <Hero
        content='Climate Resources'
        cta='view sandbox'
        ctaLink='map-sandbox'
      />

      <main className='w-full flex flex-col items-center gap-2 px-3 md:px-5 lg:px-16 py-24'>
        {/* ====== STATE RESOURCES SECTION */}
        <section className='w-full flex flex-col gap-5'>
          <h2 className='text-3xl font-medium text-gray-800'>
            Flood resources by state
          </h2>

          <span className='grid grid-cols-3 gap-5 justify-items-center'>
            {[1, 2, 3, 4, 5, 6].map((data, index) => (
              <span
                key={index}
                onClick={() => {
                  setCurrentState(data);
                  console.log(data);
                  setInfopad(true);
                }}
                className='w-full h-max items-center justify-center flex  col-span-3 lg:col-span-1'
              >
                <StateResourceCard data={data} />
              </span>
            ))}
          </span>
        </section>

        <ResourceDetail
          state={infopad}
          setState={setInfopad}
          stateObject={currentState}
        />
        <p className='text-gray-700 mt-10'>Note: Data coming soon...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
