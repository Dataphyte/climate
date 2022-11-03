'use client';

import MenuIcon from '@/icons/Menu';
import React, { useState } from 'react';
import { classNames } from '@/helpers/classNames';

const Layout = ({ children }) => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <div className='grid grid-cols-5 h-screen w-full justify-items-center'>
      <aside
        className={classNames(
          'col-span-1 w-full bg-red-400 duration-300 ease-out',
          openSide ? 'flex' : 'hidden'
        )}
      >
        <button
          onClick={() => setOpenSide((state) => !state)}
          className='text-gray-800'
        >
          Close menu
        </button>
      </aside>
      <button
        className={
          openSide
            ? 'hidden'
            : 'absolute top-1 py-1 px-4 z-10 bg-indigo-500 text-white rounded-md shadow-lg flex items-center justify-center gap-1 text-sm'
        }
        onClick={() => setOpenSide((state) => !state)}
      >
        Menu
        <MenuIcon strokeWidth={1.5} className='h-5 w-5' />
      </button>
      <main
        className={classNames(
          'h-full w-full',
          openSide ? 'col-span-4' : 'col-span-5'
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
