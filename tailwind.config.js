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
        'adelia': ['ADELIA', 'cursive', 'Open Sans','arial', 'san-serif', 'monospace'],
        'ubuntu': ['Ubuntu', 'Trebuchet MS', 'Helvetica', 'sans-serif']
      },
    },
  },
  plugins: [],
}
