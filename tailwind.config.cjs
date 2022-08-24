/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flipV: 'flipV 1s linear .2s'
      },
      keyframes: {
        flipV: {
          '50%': {
            transform: 'rotateY(180deg)',
            scale: 2
          },
          to: {
            transform: 'rotateY(360deg)',
            scale: 2
          }
        }
      }
    },
  },
  plugins: [],
};
