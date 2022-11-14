/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': "transparent",
      'primary': colors.green[500],
      'secondary': colors.green[700],
    'light': colors.zinc[200],
      'dark': colors.zinc[800],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
