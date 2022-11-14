'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex items-center justify-center flex-col w-full h-screen bg-rose-500 text-white gap-1 tracking-widest'>
      <p className='text-6xl font-black'>😥OOPS!</p>
      <p className='font-primary text-2xl font-secondary text-gray-200/80 italic'>
        Something went Wrong...
      </p>
      <Link href='/'>
        <button
          onClick={() => reset()}
          className='py-1 px-6 rounded-md shadow-lg mt-8 border border-gray-50 text-gray-50'
        >
          Click to reset
        </button>
      </Link>
    </div>
  );
};

export default Error;
