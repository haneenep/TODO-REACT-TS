/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'custom' : "url(./src/assets/photos/tod.jpg)"
      },
      colors : {
        'theme1' : 'rgb(67, 239, 169)',
        'theme2' : 'rgb(78, 179, 241)'
      }
    },
  },
  plugins: [],
}

