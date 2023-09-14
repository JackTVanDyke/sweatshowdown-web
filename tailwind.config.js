/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'gray-lightest': '#faf8f8',
      'gray-lighter': '#e7e4e4',
      'gray-light': '#d3d0d0',
      'gray': '#c0bebd',
      'gray-dark': '#989696',
      'gray-darker': '#716f6e',
      'gray-darkest': '#4a4848',
      'black': '#222020',

      'primary-light': '#ff2643',
      'primary': '#d7001d',
      'primary-dark': '#900c1e',

      'secondary-light': '#ffc7a8',
      'secondary': '#ff7f50',
      'secondary-dark': '#ef2d07',

      'tertiary-light': '#fff541',
      'tertiary': '#ffd800',
      'tertiary-dark': '#a67202',

      'success-light': '#d4f7d3',
      'success': '#00d74f',
      'success-dark': '#1e662b',

      'danger-light': '#ffd1cb',
      'danger': '#f72c3c',
      'danger-dark': '#762121',
         },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '850px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
