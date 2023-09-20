/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto']
      },

      boxShadow: {
        '3xl': ' 0px 10px 20px 2px rgba(0, 0, 0, 0.341)'
      },

      colors: {
        'form': 'rgba(0, 0, 0, 0.19)'
      }
    },
  },
  plugins: [],
}

