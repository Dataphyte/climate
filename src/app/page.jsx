'use client';

import HomeHero from './hero';
import Lottie from 'react-lottie';
import Footer from '@/components/footer';
import React, { useEffect } from 'react';
import { classNames } from '@/utils/classNames';
import HomeSwiper from '@/components/HomeSwiper';
import useTelemetrics from '@/hooks/sanity-hooks/useTelemetrics';
import barChartLottie from '@/animations/bar-charts-lottie.json';

const Page = () => {
  const telemetrics = useTelemetrics();

  useEffect(() => {
    console.log(telemetrics);
  }, [telemetrics]);

  return (
    <div className='w-full min-h-screen flex gap-5 items-center flex-col bg-gray-100'>
      <HomeHero />

      {/* ======= ############ */}
      {/* ======= ############ */}
      {/* ======= BOTTOM SECTION */}
      <section className='w-full min-h-[600px] mt-20 lg:mt-16 lg:px-20 xl:px-20 px-3 gap-10 grid grid-cols-5 justify-items-center '>
        {/* ====== SLIDER SECTION */}
        <div className='flex col-span-5 lg:col-span-2 w-full h-full max-w-[600px]'>
          <HomeSwiper />
        </div>

        {/* ====== MAP CHART */}
        <div className='h-[610px] max-w-[600px] w-full lg:mt-16 col-span-5 flex items-center justify-center pt-10 col-sapn-5 lg:col-span-3'>
          <iframe
            title='Flood Effect'
            aria-label='Map'
            id='datawrapper-chart-1Xeln'
            src='https://datawrapper.dwcdn.net/1Xeln/1/'
            style={{ width: '100%', height: '100%' }}
            data-external='1'
          ></iframe>
        </div>
      </section>

      {/* ======= ############ */}
      {/* ======= ############ */}
      {/* ======= MAIN CHART SECTION */}
      <section className='bg-dark-2 w-full min-h-[600px] h-max grid grid-cols-3 gap-3 gap-y-8 px-3 lg:px-24 py-10 lg:py-20'>
        <h1 className='font-bold text-xl lg:text-4xl col-span-3 text-gray-200 mb-10 w-max rounded-md flex items-end gap-2'>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: barChartLottie,
            }}
            style={{ width: '50px', height: '50px' }}
          />
          Climate <b className='text-white'>TRENDS</b> rundown
        </h1>
        {/* ======= CHART 1 */}
        <div className='col-span-3 lg:col-span-1 bg-white p-3 rounded-md shadow-md h-max -mt-5'>
          <iframe
            src='https://flo.uri.sh/visualisation/11715161/embed'
            title='Interactive or visual content'
            style={{ height: '300px', width: '100%' }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </div>

        {/* ======= CHART 2 */}
        <div className='col-span-3 lg:col-span-1 bg-white p-3 rounded-md shadow-md h-max -mt-5 '>
          <iframe
            src='https://flo.uri.sh/visualisation/11714968/embed'
            title='Interactive or visual content'
            style={{ height: '300px', width: '100%' }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </div>

        {/* ======= CHART 3 */}
        <div className='col-span-3 lg:col-span-1 bg-white p-3 rounded-md shadow-md h-max  -mt-5'>
          <iframe
            src='https://flo.uri.sh/visualisation/11715189/embed'
            title='Interactive or visual content'
            style={{ height: '300px', width: '100%' }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </div>

        {/* ======= INFO CARDS */}
        <h3 className='col-span-3 text-2xl lg:text-4xl text-gray-50 font-bold mt-14'>
          Flood data as of November, 2022
        </h3>
        <div className='w-full col-span-3  h-full min-h-[150px] flex items-center justify-start py-3 px-2 lg:px-8 gap-5 overflow-hidden'>
          {telemetrics &&
            telemetrics.map((item) => (
              <span
                key={item._id}
                className='w-[250px] bg-white/20 border border-white/30 h-[120px] py-3 px-5 rounded-lg shadow-lg shrink-0 gap-1 animate-chart-slider-sm lg:animate-chart-slider-lg ease-out select-none flex justify-between flex-col'
              >
                <p className=' font-bold text-gray-50'>{item.title}</p>
                <p className='text-sm font-light text-gray-100/70'>
                  {item.tag}
                </p>
                <p
                  className={classNames(
                    'text-2xl font-black',
                    item.people ? 'text-red-400' : 'text-bg-grad-2'
                  )}
                >
                  {item.value}
                </p>
              </span>
            ))}
        </div>

        {/* ======= BOTTOM THIRD ROW CHARTS */}
        <div className='col-span-3 lg:col-span-2 bg-white p-3 rounded-md shadow-md h-max '>
          <iframe
            src='https://flo.uri.sh/visualisation/11681640/embed'
            title='Interactive or visual content'
            style={{ height: '300px', width: '100%' }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </div>

        <div className='col-span-3 lg:col-span-1 bg-white p-3 rounded-md shadow-md h-max '>
          <iframe
            src='https://flo.uri.sh/visualisation/11715093/embed'
            title='Interactive or visual content'
            style={{ height: '300px', width: '100%' }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;

// trend of nigerias rainfaLL
// nigerias GHG emissions
// Key natural hazard statistics
// A place for resources

// change as of today tp 2022 flood in nigeria by data
