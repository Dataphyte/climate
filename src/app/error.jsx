'use client';

import React, { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex items-center justify-center flex-col w-full h-screen bg-rose-500 text-white'>
      <p className='font-primary text-4xl'>Something went Wrong...</p>
      <button onClick={() => reset()}>Click to reset</button>
    </div>
  );
};

export default Error;
