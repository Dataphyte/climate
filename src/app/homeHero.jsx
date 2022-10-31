'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HomeNavBar from './homeNavBar';
import { topography } from '../assets/svg/topography.js';

const HomeHero = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transform:
        'rotateY(-43deg) rotateX(20deg) translateZ(120px) translateY(50px)',
    },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  const chartVariants = {
    hidden: {
      opacity: 0,
      x: 200,
      y: 0,
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transform: 'rotateY(-43deg) rotateX(15deg)',
    },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    typeof window && (
      <header className='w-full flex flex-col items-center h-[60vh] shadow-2xl px-10 lg:px-24 bg-gradient-to-br from-[#1449d9] to-[#38bdee] xl:px-44 min-h-[600px] gap-2 relative'>
        <HomeNavBar />
        <Image
          src={topography}
          alt='hero-bg-image'
          fill
          className='top-0 left-0'
        />
        {/* ======= CONTENT */}
        <section className='w-full h-full lg:items-center lg:justify-center gap-10 flex flex-col lg:flex-row z-10'>
          {/* ======= TEXT AREA */}
          <div className='w-full h-2/3 lg:w-1/2 flex flex-col  px-10 min-h-[400px] xl:px-24 shrink-0 justify-center gap-10 z-10'>
            <h1 className='text-white/80 text-6xl lg:text-5xl'>
              Climate change <br />
              <b className='text-white text-8xl lg:text-7xl font-bold'>
                Data Centre
              </b>
            </h1>

            <Link
              href='#'
              className='bg-white w-max px-8 py-3 rounded-lg shadow-xl text-main-color font-medium cursor-pointer'
            >
              Dashboard sandbox
            </Link>
          </div>

          {/* ======= CHART AREA */}
          <div
            className='hidden lg:flex w-full h-[400px] flex-col gap-6  lg:w-[600px] xl:w-[700px] right-10 xl:right-24 bottom-10 shrink-0 '
            style={{
              perspective: '1800px',
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              variants={cardVariants}
              initial='hidden'
              animate='enter'
              exit='exit'
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 18,
                delay: 0.5,
              }}
              className='flex w-full h-max items-center justify-between gap-4 shrink-0 '
              style={{
                transform:
                  'rotateY(-43deg) rotateX(20deg) translateZ(120px) translateY(50px)',
              }}
            >
              <div className='w-1/2 h-32 bg-white rounded-lg shadow-xl lg:h-24 flex flex-col items-end px-3 py-2 relative'>
                <p className='text-5xl font-bold text-main-color'>12</p>
                <p className='text-xl font-medium'>Flood - Affected states</p>
              </div>
              <div className='w-1/2 h-32 bg-white rounded-lg shadow-xl lg:h-24 flex flex-col items-end px-3 py-2 relative'>
                <p className='text-5xl font-bold text-main-color'>1.4m</p>
                <p className='text-xl font-medium'>Flood - People displaced</p>
              </div>
            </motion.div>

            <motion.div
              variants={chartVariants}
              initial='hidden'
              animate='enter'
              exit='exit'
              transition={{ type: 'linear', delay: 0.3 }}
              className='w-full  rounded-xl shadow-2xl shrink-0 bg-white lg:h-[410px] origin-left border flex items-center justify-center p-3'
              style={{ transform: 'rotateY(-43deg) rotateX(15deg)' }}
            >
              <iframe
                src='https://flo.uri.sh/visualisation/11296696/embed'
                title='Interactive or visual content'
                className='flourish-embed-iframe'
                style={{ width: '100%', height: '100%' }}
                sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
              ></iframe>
            </motion.div>
          </div>

          {/* ======= MOBILE CHART AREA */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 18 }}
            className='flex lg:hidden w-full rounded-xl shadow-xl h-[500px] bg-white z-10 shrink-0 items-center justify-center p-3'
          >
            <iframe
              src='https://flo.uri.sh/visualisation/11296696/embed'
              title='Interactive or visual content'
              className='flourish-embed-iframe'
              style={{ width: '100%', height: '100%' }}
              sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
            ></iframe>
          </motion.div>
        </section>
      </header>
    )
  );
};

export default HomeHero;

// bg-gradient-to-br from-[#1449d9] to-[#38bdee]
