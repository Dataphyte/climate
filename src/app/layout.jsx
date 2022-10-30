import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className='h-full w-full m-0'>{children}</body>
    </html>
  );
}
