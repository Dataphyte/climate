'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeNavBar from '../components/navBar';
import { motion } from 'framer-motion';
import { topography } from '@/svg/topography';

const cardData = [
  { value: '₦2.8B', desc: 'Drainage project contract amt', icon: 1 },
  { value: '₦3,349B', desc: 'Erosion project contract amt', icon: 1 },
  { value: '304,407+', desc: 'Flood affected houses', icon: 1 },
  { value: '4,651,138', desc: 'Flood victims', icon: 1 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -200 },
};

const chartVariants = {
  hidden: { opacity: 0, y: 200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -200 },
};

const HomeHero = () => {
  return (
    <header className='w-full flex flex-col items-center h-[55vh] shadow-xl px-3 lg:px-24 bg-gradient-to-br from-bg-grad-1 to-bg-grad-2 xl:px-44 min-h-[400px] gap-2 relative'>
      <Image
        src={topography}
        alt='hero-bg-image'
        fill
        className='top-0 left-0'
      />

      <HomeNavBar />
      <div className='flex w-full h-full flex-col lg:flex-row items-center px-2 md:px-6 lg:px-0'>
        {/* ======= CONTENT SECTION */}
        <div className=' w-full flex flex-col gap-6 justify-center py-16 shrink-0 z-10 lg:w-2/5 lg:-mt-20'>
          <h1 className='text-gray-200 text-bold text-3xl'>
            Climate change <br />
            <b className='text-bold text-6xl text-white'>Data-Centre</b>
          </h1>
          <Link
            href='map-sandbox'
            className='py-2 px-6 text-main-color rounded-md shadow-lg bg-gray-100 w-max'
          >
            View sandbox
          </Link>
        </div>

        {/* ======= DATA SECTION */}
        <div className='w-full grid grid-cols-4 lg:grid-rows-5 h-max rounded-md lg:shadow-2xl shrink-0 gap-2 z-10 lg:w-3/5 max-w-[600px] lg:ml-01 xl:ml-24 lg:h-[300px]'>
          {cardData.map((item, idx) => (
            <motion.div
              variants={cardVariants}
              initial='hidden'
              animate='enter'
              exit='exit'
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 500,
                delay: idx * 0.2,
              }}
              key={idx}
              className='flex flex-col py-1 px-5 row-span-1 col-span-2 bg-white justify-items-center rounded-md shadow-lg'
            >
              <p className='font-black text-bg-grad-1 text-xl'>{item.value}</p>
              <p className='text-gray-800 text-sm'>{item.desc}</p>
            </motion.div>
          ))}

          {/* ======= CHART CARD */}
          <motion.div
            variants={chartVariants}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 500,
            }}
            className='col-span-4 row-span-3 shadow-lg rounded-lg bg-white overflow-hidden p-2 lg:h-[350px] h-[300px] hidden lg:block'
          >
            <iframe
              src='https://flo.uri.sh/visualisation/11715093/embed'
              title='Interactive or visual content'
              style={{ width: '100%', height: '100%' }}
              sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
            ></iframe>
            ;
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
