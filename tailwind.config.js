/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './home.html',
    './*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
        'adelia': ["ADELIA", "cursive"],
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}
