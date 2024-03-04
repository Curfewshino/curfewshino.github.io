/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './books/*.{html,js}',
              './books/name/*.{html,js}',
              './*.{html,js}'
            ],
  theme: {
    extend: {},
  },
  plugins: [],
}

