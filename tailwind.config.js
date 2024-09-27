/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik', 'sans-serif'],
        'graphik-bold': ['Graphik-bold', 'sans-serif']
      },
      colors: {
        primary: '#2091F9',
        text: '#252B42',
        'secondary-Text': '#374754',
        'dark-Background': '#252B42'
      },
      screens: {
        'xs': '400px'
      }
    },
  },
  plugins: [],
}

