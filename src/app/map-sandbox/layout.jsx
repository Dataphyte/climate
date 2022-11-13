'use client';

import Lottie from 'react-lottie';
import MenuIcon from '@/icons/Menu';
import React, { useState } from 'react';
import { classNames } from '@/utils/classNames';
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
          'col-span-5 lg:col-span-1 w-full bg-dark-2 hover:border-gray-600 text-gray-50 duration-300 ease-out relative py-10 px-10 md:px-16 lg:px-5 flex-col gap-3 font-secondary font-light',
          openSide ? 'flex' : 'hidden'
        )}
      >
        {/* ======= CLOSE BUTTON */}
        <button
          onClick={() => setOpenSide((state) => !state)}
          className='text-gray-50 absolute right-2 top-3 py-1 px-5 rounded shadow border border-gray-50 text-sm font-light'
        >
          Close
        </button>

        <h1>Hint</h1>

        <ul className='list-disc'>
          <li>
            The menu directly beside the map shows the available data that could
            be layered on the map.
          </li>

          <li>
            Once a dataset is selcted, it is shown on the map with different
            icons.
          </li>

          <li>
            Multiple datasets can be layered over each other at one time but due
            to heavy computational requirement, if your device does not have a
            lot of computational power, it is adviceable to be concious of the
            number of datasets layered simultaneously as your broswer could
            freeze or potentially crash due to heavy workloads.
          </li>
        </ul>

        <Link
          href='/'
          className='w-full rounded py-2 shadow-md border border-gray-50 flex items-center justify-center mt-20 hover:bg-rose-400 duration-150'
        >
          Exit
        </Link>
      </aside>

      {/* ======= ############ */}
      {/* ======= ############ */}
      {/* ======= FLOATING MENU BUTTON */}
      <button
        className={
          openSide
            ? 'hidden'
            : 'absolute top-2 py-1 px-4 z-10 bg-indigo-500 text-white rounded-md shadow-lg flex items-center justify-center gap-1 text-sm left-10'
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
          openSide ? 'hidden lg:col-span-4' : 'col-span-5'
        )}
      >
        <div className='hidden lg:block'> {children}</div>

        <div className='bg-main-color flex lg:hidden w-full h-full items-center justify-center flex-col gap-5'>
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
          <Link
            href='/'
            className='py-2 px-6 rounded-lg shadow-lg border border-gray-200 text-gray-200'
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Layout;
