/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/assets/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#3955CB',
        'bg-grad-1': '#1449d9',
        'bg-grad-2': '#38bdee',
        'light-color': '#FCFDFE',
        'dark-2': '#111827',
      },

      animation: {
        'chart-slider-lg': 'chart-slider-lg 40s ease-out infinite',
        'chart-slider-sm': 'chart-slider-sm 40s ease-out infinite',
      },

      keyframes: {
        'chart-slider-lg': {
          '0%, 100%': { transform: 'translateX(0) ' },
          '50%': { transform: ' translateX(-1000px) ' },
        },
        'chart-slider-sm': {
          '0%, 100%': { transform: 'translateX(0) ' },
          '50%': { transform: ' translateX(-1800px) ' },
        },
      },

      fontFamily: {
        main: "'Roboto', sans-serif",
        secondary: "'Roboto Serif', serif",
      },

      clipPath: {
        'desktop-hero': 'polygon(0 0, 100% 0, 100% 100%, 0 80%)',
        'mobile-hero': 'polygon(0 0, 100% 0, 100% 100%, 0 90%)',
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
