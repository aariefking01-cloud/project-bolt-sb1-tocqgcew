/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090a',
          900: '#0d0f11',
          850: '#121518',
          800: '#181c20',
          700: '#22272d',
          600: '#2d343b',
          500: '#3a424a',
          400: '#525b65',
          300: '#717b86',
          200: '#9aa3ad',
          100: '#c4cad1',
          50: '#e8eaed',
        },
        gold: {
          600: '#b8860b',
          500: '#d4a017',
          400: '#e0b53c',
          300: '#ecc75e',
          200: '#f5dc8f',
          100: '#faedc4',
        },
        accent: {
          red: '#c8392f',
          green: '#2d8659',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-down': 'fadeDown 0.7s ease-out both',
        'scale-in': 'scaleIn 0.5s ease-out both',
        'slide-right': 'slideRight 0.5s ease-out both',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};
