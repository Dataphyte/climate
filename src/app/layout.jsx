import React from 'react';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name='description' content='Transol landing page' />
        <title>HOME</title>
      </head>

      <body className='h-full w-full m-0 bg-light-color'>
        <div>{children}</div>
      </body>
    </html>
  );
}
