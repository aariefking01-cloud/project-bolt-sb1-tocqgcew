/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#edeef2',
          200: '#d7dbe2',
          300: '#b4bcc8',
          400: '#8b97a8',
          500: '#6d7b8f',
          600: '#556274',
          700: '#3a4350',
          750: '#2c333e',
          800: '#1e232b',
          850: '#16191f',
          900: '#0f1115',
          950: '#08090a',
        },
        gold: {
          50: '#fefbf3',
          100: '#fdf5e2',
          200: '#fbe9c0',
          300: '#f7d692',
          400: '#f59e0b',
          500: '#d4a017',
          600: '#b8860b',
          700: '#926a08',
          800: '#75540a',
          900: '#60450d',
          950: '#362404',
        },
      },
      fontFamily: {
        display: ['Oswald', 'Montserrat', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '420px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
