import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeNavBar from './homeNavBar';
import { topography } from '../assets/svg/topography.js';

const HomeHero = () => {
  return (
    <header className='w-full flex flex-col items-center h-[60vh] shadow-2xl px-10 lg:px-24 bg-gradient-to-br from-[#1449d9] to-[#38bdee] xl:px-44 min-h-[600px] gap-2 relative'>
      <HomeNavBar />
      <Image
        src={topography}
        alt='hero-bg-image'
        fill
        style={{
          objectFit: 'fill',
        }}
        className='top-0 left-0'
      />
      {/* ======= CONTENT */}
      <section className='w-full h-full lg:items-center lg:justify-center gap-10 flex flex-col lg:flex-row z-10'>
        {/* ======= TEXT AREA */}
        <div className='w-full lg:w-1/2 flex flex-col  px-10 min-h-[400px] xl:px-44 shrink-0 justify-center gap-10 z-10'>
          <h1 className='text-white/80 text-5xl'>
            Climate change <br />
            <b className='text-white text-7xl font-bold'>Data Centre</b>
          </h1>

          <Link
            href='#'
            className='bg-white w-max px-8 py-3 rounded-lg shadow-xl text-main-color font-medium cursor-pointer'
          >
            View categories
          </Link>
        </div>

        {/* ======= CHART AREA */}
        <div
          className='hidden lg:flex w-full h-[400px] flex-col gap-6  lg:w-[600px] xl:w-[700px] right-10 xl:right-24 bottom-10 shrink-0 '
          style={{
            perspective: '1500px',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className='flex w-full h-max items-center justify-between gap-4 shrink-0'
            style={{
              transform:
                'rotateY(-43deg) rotateX(20deg) translateZ(120px) translateY(50px)',
            }}
          >
            <div className='w-1/2 h-32 bg-white rounded-lg shadow-xl lg:h-24 ' />
            <div className='w-1/2 h-32  bg-white rounded-lg shadow-xl lg:h-24 ' />
          </div>

          <div
            className='w-full h-[600px] rounded-xl shadow-2xl shrink-0 bg-white lg:h-[400px] origin-left border'
            style={{ transform: 'rotateY(-43deg) rotateX(15deg)' }}
          />
        </div>
      </section>
    </header>
  );
};

export default HomeHero;

// bg-gradient-to-br from-[#1449d9] to-[#38bdee]
