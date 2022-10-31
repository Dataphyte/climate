'use client';

import { motion } from 'framer-motion';
import React from 'react';

const cardData = [
  { value: '₦1,000,000', content: 'Us support supplies' },
  { value: '₦5,000,000', content: 'Worth of Utilities from FG' },
  { value: '1.4m', content: 'Houses damaged by flood' },
  { value: '7,750', content: 'Cases reported as at August & September' },
];

const HomeMainChart = () => {
  const chartVariants = {
    hidden: { opacity: 0, y: 200 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -200 },
  };

  return (
    <div className='w-full h-full flex flex-col py-16 px-3 lg:px-16 gap-6'>
      <h3 className='text-3xl font-medium text-gray-600'>Quick Charts</h3>

      {/* ======= MAIN CHART */}
      <div className='w-full h-max flex items-center justify-center px-2 py-10 gap-5 border rounded-lg flex-wrap shadow-2xl'>
        {/* ======= CHART 1 */}
        <motion.div
          variants={chartVariants}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{
            type: 'spring',
            delay: 0.2,
            duration: 0.5,
            stiffness: 500,
            damping: 20,
          }}
          className='rounded-xl shadow-lg bg-white w-full max-w-[310px] h-[350px] shrink-0'
        >
          <iframe
            src='https://flo.uri.sh/visualisation/11296647/embed'
            title='Interactive or visual content'
            className='flourish-embed-iframe'
            style={{ width: '100%', height: '100%' }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </motion.div>

        {/* ======= CHART 2 */}
        <motion.div
          variants={chartVariants}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{
            type: 'spring',
            delay: 0.5,
            duration: 0.5,
            stiffness: 500,
            damping: 20,
          }}
          className='rounded-xl shadow-lg bg-white w-full h-[350px] max-w-[310px] shrink-0'
        >
          <iframe
            src='https://flo.uri.sh/visualisation/11522917/embed'
            title='Interactive or visual content'
            className='flourish-embed-iframe'
            style={{ width: '100%', height: '100%' }}
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </motion.div>
      </div>

      <div></div>

      <div className='flex flex-col gap-5 shadow-2xl rounded-lg bg-white py-8 px-3 lg:px-7 bg-gradient-to-br from-[#262626] to-[#24282a]'>
        <h3 className='text-3xl font-medium text-gray-200'>As of today</h3>
        <div className='h-[1px] w-full bg-gray-200 -mt-3' />
        {/* ======= CARDS  */}
        <div className='grid grid-cols-4 gap-5 w-full'>
          {cardData.map((item, index) => (
            <span
              key={index}
              className='col-span-2 w-full lg:col-span-2 rounded-lg shadow-xl border  py-4 px-10 flex flex-col gap-2 bg-white/90'
            >
              <p className='text-4xl font-black text-bg-grad-1'>{item.value}</p>
              <p className='text-md font-regular text-gray-600'>
                {item.content}
              </p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMainChart;
