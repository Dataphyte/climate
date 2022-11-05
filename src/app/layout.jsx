'use client';

import 'swiper/css';
import React from 'react';
import '../styles/globals.css';
import { motion } from 'framer-motion';

export default function RootLayout({ children }) {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8, y: 200 },
  };
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>CLIMATE-DATA | HOME</title>
      </head>

      <body className='h-full w-full m-0 bg-light-color'>
        <motion.div
          variants={variants}
          initial='hidden'
          animate='enter'
          exit='exit'
        >
          {children}
        </motion.div>
      </body>
    </html>
  );
}
