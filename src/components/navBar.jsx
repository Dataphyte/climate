'use client';

import Link from 'next/link';
import MenuIcon from '@/icons/Menu';
import React, { useState } from 'react';
import { classNames } from '@/utils/classNames';

const navLinks = [
  { route: '/', label: 'Home' },
  { route: 'map-sandbox', label: 'Map Sandbox' },
  { route: 'resources', label: 'Resources' },
  { route: 'data', label: 'Data' },
  { route: 'reports', label: 'Reports' },
];

const HomeNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='w-full h-16 shrink-0 lg:h-24 flex py-2 items-center justify-between z-50 relative'>
      {/* ======= LOGO TEXT */}
      <Link href='/'>
        <p className='text-white font-bold text-lg tracking-wide'>DATAPHYTE</p>
      </Link>

      {/* ======= MENU ITEMS */}
      <span className='hidden lg:flex items-center mx-5 gap-6 text-white font-regular '>
        {navLinks.map((navItem, idx) => (
          <Link href={navItem.route} className='home-nav-links' key={idx}>
            {navItem.label}
          </Link>
        ))}
      </span>

      {/* ======= NAV CALL TO ACTION  */}
      <Link href='/' className='home-nav-btn'>
        Home
      </Link>

      {/* ======= MOBILE BUTTONS */}
      <div
        className='w-10 h-9 border border-gray-200 rounded-lg shadow-lg items-center justify-center flex lg:hidden cursor-pointer'
        onClick={() => setMenuOpen((state) => !state)}
      >
        <MenuIcon className='text-gray-200 w-7 h-6' />
      </div>

      {/* ======= MOBILE NAV MENU */}
      <span
        className={classNames(
          'flex flex-col pt-8 pb-2 px-2 w-[180px] bg-white absolute right-2 top-1 pointer-events-none shadow-xl transition-all duration-300 ease-out rounded-md opacity-0 gap-3 lg:hidden items-center',
          menuOpen && 'opacity-100 top-14 pointer-events-auto'
        )}
      >
        {navLinks.map((navItem, idx) => (
          <Link
            href={navItem.route}
            key={idx}
            className='text-sm font-main text-gray-700'
          >
            {navItem.label}
          </Link>
        ))}

        {/* ======= NAV CALL TO ACTION  */}
        <Link
          href='/'
          className=' w-full border rounded-md shadow-lg flex items-center justify-center py-2 px-6 mt-5 bg-main-color text-white'
        >
          Home
        </Link>
      </span>
    </nav>
  );
};

export default HomeNavBar;
