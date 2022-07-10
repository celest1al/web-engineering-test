/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-grey': '#CDCDCD',
        'primary-black': '#354259',
        'primary-white': '#F8F4F9',
        'primary-purple': '#3f37c9',
        'primary-red': '#FF0063',
      },
    },
  },
  plugins: [],
}
