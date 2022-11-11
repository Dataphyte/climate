import React from 'react';
import Image from 'next/image';
import HomeNavBar from '@/components/navBar';
import { topography } from '@/svg/topography';
import Link from 'next/link';

const Hero = ({ content = '', cta = '', ctaLink = '/' }) => {
  return (
    <div className='w-full flex flex-col items-center h-[40vh] shadow-xl px-3 lg:px-24 bg-gradient-to-br from-bg-grad-1 to-bg-grad-2 xl:px-44 min-h-[300px] gap-2 relative text-center'>
      <Image
        src={topography}
        alt='hero-bg-image'
        fill
        className='top-0 left-0'
      />
      <HomeNavBar />
      <h1 className='text-4xl font-medium text-gray-200 mt-16 lg:mt-5 xl:text-5xl z-10'>
        {content}
      </h1>
      <Link
        href={ctaLink}
        target='_blank'
        className='py-2 px-8 border rounded-md shadow-md border-gray-100 text-gray-100 mt-4 cursor-pointer z-10 duration-300 ease-out hover:text-bg-grad-1 hover:bg-gray-100 hover:text-medium'
      >
        {cta}
      </Link>
    </div>
  );
};

export default Hero;
