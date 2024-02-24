/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {

      'sm': '550px',

      'md': '820px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1500px',
    },

    colors: {
      'orange': '#ff780d',
      'light-orange': '#ffa92d',
      'yellow': '#fff65f',
      'blue': '#5384ac',
      'green': '#83dc9c',
      'white': '#fefefe',
      'light-gray': '#d1d5db',
      'gray': '#6b7280',
      'dark-gray': '#111827'
    },
  },
  plugins: [],
}

