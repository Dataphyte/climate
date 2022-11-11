import React from 'react';
import HomeHero from './hero';
import HomeSwiper from '@/components/HomeSwiper';
import { classNames } from '@/utils/classNames';

const cardData = [
  {
    title: 'Flood effects',
    tag: 'Persons affected by flood',
    value: '3,219,780',
    icon: 'icon',
    bad: true,
  },
  {
    title: 'Flood Displacements',
    tag: 'Internally displaced persons',
    value: '1,427,370',
    icon: 'icon',
    bad: true,
  },
  {
    title: 'Flood Injuries',
    tag: 'Number of persons injured',
    value: '2,776',
    icon: 'icon',
    bad: true,
  },
  {
    title: 'Flood Deaths',
    tag: 'Number of lives lost to flood',
    value: '612',
    icon: 'icon',
    bad: true,
  },
  {
    title: 'Flood Damages',
    tag: 'Houses partially damaged',
    value: '181,600',
    icon: 'icon',
    bad: false,
  },
  {
    title: 'Flood Damage',
    tag: 'Houses totally damaged',
    value: '123,807',
    icon: 'icon',
    bad: true,
  },
  {
    title: 'Agricultural Damage',
    tag: 'Hectares of farmlands partially damaged',
    value: '176,852',
    icon: 'icon',
    bad: false,
  },
  {
    title: 'Agricultural Damage',
    tag: 'Hectares of farmlands totally damaged',
    value: '392,399',
    icon: 'icon',
    bad: false,
  },
];

const Page = () => {
  return (
    <div className='w-full min-h-screen flex gap-5 items-center flex-col bg-gray-100'>
      <HomeHero />

      {/* ======= ############ */}
      {/* ======= ############ */}
      {/* ======= BOTTOM SECTION */}
      <section className='w-full min-h-[600px] mt-20 lg:mt-16 lg:px-20 xl:px-32 px-3 gap-5 flex flex-col'>
        <h3 className='font-bold text-3xl text-gray-700'>Quick Charts</h3>
        <div className='grid grid-cols-5'>
          <HomeSwiper />
        </div>
      </section>

      {/* ======= ############ */}
      {/* ======= ############ */}
      {/* ======= MAIN CHART SECTION */}
      <section className='bg-dark-2 w-full min-h-[600px] h-max grid grid-cols-3 gap-3 gap-y-10 px-3 lg:px-24 py-10 lg:py-20'>
        <h1 className='font-bold text-2xl lg:text-5xl col-span-3 text-gray-200 mb-10 border-l-2 w-max px-3 lg:px-10 rounded-md'>
          Climate <b className='text-white'>TRENDS</b> rundown
        </h1>
        {/* ======= CHART 1 */}
        <div className='col-span-3 lg:col-span-1 bg-white p-3 rounded-md shadow-md h-max '>
          <iframe
            src='https://flo.uri.sh/visualisation/11715161/embed'
            title='Interactive or visual content'
            style={{ height: '300px', width: '100%' }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </div>

        {/* ======= CHART 2 */}
        <div className='col-span-3 lg:col-span-1 bg-white p-3 rounded-md shadow-md h-max '>
          <iframe
            src='https://flo.uri.sh/visualisation/11714968/embed'
            title='Interactive or visual content'
            style={{ height: '300px', width: '100%' }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </div>

        {/* ======= CHART 3 */}
        <div className='col-span-3 lg:col-span-1 bg-white p-3 rounded-md shadow-md h-max '>
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
          {cardData.map((item, idx) => (
            <span
              key={idx}
              className='w-[250px] bg-white/20 border border-white/30 h-[120px] py-2 px-5 rounded-lg shadow-lg shrink-0 gap-1 animate-chart-slider-sm lg:animate-chart-slider-lg ease-out select-none flex justify-center flex-col'
            >
              <p className=' font-bold text-gray-50'>{item.title}</p>
              <p className='text-sm font-light text-gray-100/70'>{item.tag}</p>
              <p
                className={classNames(
                  'text-2xl font-black',
                  item.bad ? 'text-red-400' : 'text-bg-grad-2'
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
    </div>
  );
};

export default Page;

// trend of nigerias rainfaLL
// nigerias GHG emissions
// Key natural hazard statistics
// A place for resources

// change as of today tp 2022 flood in nigeria by data
