/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './books/*.{html,js}',
              './books/name/*.{html,js}',
              './*.{html,js}','./projects/*.{html,js}',
              './error-404/c3RhZ2Uy.html','./FarmTexCorp/*.{html,js}'
            ],
  theme: {
    extend: {
      keyframes: {
        blinkingBg: {
          '0%, 100%': { backgroundColor: '#ef4444' },
            '50%': { backgroundColor: '#fee2e2' },
        }
      },
        animation: {
          blinkingBg: 'blinkingBg 2s ease-in-out infinite',
        }
    },
},
  plugins: [],
}

