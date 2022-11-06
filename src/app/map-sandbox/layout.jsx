'use client';

import Lottie from 'react-lottie';
import MenuIcon from '@/icons/Menu';
import React, { useState } from 'react';
import { classNames } from '@/helpers/classNames';
import ScreenLottie from '@/animations/screen-lottie.json';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <div className='grid grid-cols-5 h-screen w-full justify-items-center'>
      {/* ======= ############ */}
      {/* ======= ############ */}
      {/* ======= SIDE MENU */}
      <aside
        className={classNames(
          'col-span-4 lg:col-span-1 w-full bg-main-color text-gray-50 duration-300 ease-out relative py-10 px-2 lg:px-5 flex-col gap-3 font-secondary font-light',
          openSide ? 'flex' : 'hidden'
        )}
      >
        {/* ======= CLOSE BUTTON */}
        <button
          onClick={() => setOpenSide((state) => !state)}
          className='text-gray-50 absolute right-2 top-3 py-1 px-4 rounded shadow border border-gray-50 text-sm font-light'
        >
          Close
        </button>

        <h1>Hint</h1>

        <p>
          The menu directly beside the map shows the available data that could
          be layered on the map.
        </p>
        <p>
          Once a dataset is selcted, it is shown on the map with different
          icons.
        </p>
        <p>
          Multiple datasets can be layered over each other at one time but due
          to heavy computational requirement, if your device does not have a lot
          of computational power, it is adviceable to be concious of the number
          of datasets layered simultaneously as your broswer could freeze or
          potentially crash due to heavy workloads.
        </p>

        <Link
          href='/'
          className='w-full rounded py-2 shadow-md border border-gray-50 flex items-center justify-center mt-20'
        >
          Back Home
        </Link>
      </aside>

      {/* ======= ############ */}
      {/* ======= ############ */}
      {/* ======= FLOATING MENU BUTTON */}
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

      {/* ======= ############ */}
      {/* ======= ############ */}
      {/* ======= MAIN CONTENT */}
      <main
        className={classNames(
          'h-full w-full',
          openSide ? 'col-span-1 lg:col-span-4' : 'col-span-5'
        )}
      >
        <div className='hidden lg:block'> {children}</div>

        <div className='bg-rose-500 flex lg:hidden w-full h-full items-center justify-center flex-col gap-5'>
          <Lottie
            options={{
              autoplay: true,
              loop: true,
              animationData: ScreenLottie,
            }}
            style={{ width: '300px', height: '300px', marginTop: '-200px' }}
          />
          <p className='text-3xl font-bold text-gray-100 text-center w-3/4'>
            Screen size too small to show Sandbox
          </p>
          <Link href='/'> Back to home</Link>
        </div>
      </main>
    </div>
  );
};

export default Layout;
