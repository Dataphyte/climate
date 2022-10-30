import React from 'react';
import Link from 'next/link';

const HomeNavBar = () => {
  return (
    <nav className='w-full h-44 lg:h-20 flex py-2 items-center justify-between px-10 lg:px-0 z-50'>
      {/* ======= LOGO TEXT */}
      <p className='text-white font-bold text-2xl tracking-wide'>DATAPHYTE</p>

      {/* ======= MENU ITEMS */}
      <span className='hidden lg:flex items-center mx-5 gap-5 text-white font-regular '>
        <Link href='flood' className='home-nav-links'>
          Water/Flood
        </Link>
        <Link href='/' className='home-nav-links'>
          Forestry
        </Link>
        <Link href='/' className='home-nav-links'>
          Energy
        </Link>
        <Link href='/' className='home-nav-links'>
          Agriculture
        </Link>
      </span>

      {/* ======= NAV CALL TO ACTION  */}
      <Link
        href='#'
        className='hidden lg:flex text-lg items-center gap-2 text-gray-200 duration-300 ease-out border rounded-md py-1 px-10  border-gray-200 hover:shadow-lg hover:border-white hover:text-white'
      >
        Explore
      </Link>
    </nav>
  );
};

export default HomeNavBar;
