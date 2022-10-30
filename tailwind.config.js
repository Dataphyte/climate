/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#3955CB',
        'light-color': '#FCFDFE',
      },
      clipPath: {
        'desktop-hero': 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
        'mobile-hero': 'polygon(0 0, 100% 0, 100% 100%, 0 90%)',
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
