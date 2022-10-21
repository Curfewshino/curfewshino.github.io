/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/home.html',
    './src/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
        'adelia': ["ADELIA", "cursive"],
      },
    },
  },
  plugins: [],
}
