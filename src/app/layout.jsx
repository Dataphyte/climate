'use client';

import '../styles/globals.css';
import React from 'react';
import { motion } from 'framer-motion';

export default function RootLayout({ children }) {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0, x: -200 },
  };
  return (
    <html>
      <head></head>
      <body className='h-full w-full m-0 bg-light-color'>
        <motion.div
          variants={variants}
          initial='hidden'
          animate='enter'
          exit='exit'
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            duration: 0.3,
          }}
        >
          {children}
        </motion.div>
      </body>
    </html>
  );
}
