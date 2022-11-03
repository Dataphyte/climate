'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeNavBar from './navBar';
import { motion } from 'framer-motion';
import { topography } from '@/svg/topography';

const cardData = [
  { value: '3.2m', desc: 'Flood Victims', icon: 1 },
  { value: '7,224', desc: 'Houses destroyed', icon: 1 },
  { value: '3.2m', desc: 'Flood Victims', icon: 1 },
  { value: '3.2m', desc: 'Flood Victims', icon: 1 },
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
    <header className='w-full flex flex-col items-center h-[60vh] shadow-2xl px-3 lg:px-24 bg-gradient-to-br from-bg-grad-1 to-bg-grad-2 xl:px-44 min-h-[600px] gap-2 relative'>
      <HomeNavBar />
      <Image
        src={topography}
        alt='hero-bg-image'
        fill
        className='top-0 left-0'
      />

      <div className='flex w-full h-full flex-col lg:flex-row'>
        {/* ======= CONTENT SECTION */}
        <div className=' w-full flex flex-col gap-6 justify-center py-16 shrink-0 z-10 lg:w-2/5 lg:-mt-20'>
          <h1 className='text-gray-200 text-bold text-3xl'>
            Climate change <br />
            <b className='text-bold text-6xl text-white'>Data-Centre</b>
          </h1>
          <Link
            href='/'
            className='py-2 px-6 text-main-color rounded-md shadow-lg bg-gray-100 w-max'
          >
            View sandbox
          </Link>
        </div>

        {/* ======= DATA SECTION */}
        <div className='w-full grid grid-cols-4 grid-rows-5 h-[400px] rounded-md shadow-2xl shrink-0 gap-2 z-10 lg:w-3/5 max-w-[600px] lg:mt-34 lg:ml-24 lg:h-[400px]'>
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
              className='flex flex-col py-2 px-3 row-span-1 col-span-2 bg-white shadow-lg rounded-md'
            >
              <p className='font-black text-bg-grad-1 text-2xl'>{item.value}</p>
              <p className='text-gray-700 font-secondary'>{item.desc}</p>
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
            className='col-span-4 row-span-3 shadow-lg rounded-lg bg-white overflow-hidden p-2 lg:h-[400px]'
          >
            <iframe
              src='https://flo.uri.sh/visualisation/11296696/embed'
              title='Interactive or visual content'
              class='flourish-embed-iframe'
              style={{ width: '100%', height: '100%' }}
              sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
            ></iframe>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;