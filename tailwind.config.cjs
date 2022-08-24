/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flipY: 'flipY 2.5s linear infinite',
        bgAnim: 'bgAnim 5s linear infinite'
      },
      keyframes: {
        flipY: {
          '50%': {
            transform: 'rotateY(180deg)'
          },
          to: {
            transform: 'rotateY(360deg)'
          },
        },
        bgAnim: {
          '5%': {
            opacity: .4
          },
          '100%': {
            transform: 'translateY(85vh) scale(.9, .9)',
            opacity: 0,
          },
        }
      },
      fontFamily: {
        roboto: ['Roboto']
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ]
};
