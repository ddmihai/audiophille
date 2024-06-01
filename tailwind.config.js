/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        'light': '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // A very light shadow
      },

      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },


      colors: {
        'primary-brown': '#D87D4A',
        'secondary-brown': '#fbaf85',

        'primary-black': '#000000',
        'secondary-black': '#101010',

        'gray': '#F1F1F1',
        'light-gray': '#FAFAFA',
      },
    },
  },
  plugins: [],
}
