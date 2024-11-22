/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kamerik205: ['kamerik205-c'],
        merriweather: ['merriweather-c'],
      }
    },
  },
  plugins: [],
}