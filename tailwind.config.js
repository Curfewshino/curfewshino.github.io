/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './home.html',
    './*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'normal' : ['Noto Sans Mono', 'monospace','Tahoma', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
