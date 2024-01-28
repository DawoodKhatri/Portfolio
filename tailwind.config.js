/** @type {import('tailwindcss').Config} */

const { APP_COLOR } = require("./constants/theme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: APP_COLOR[500],
          light: APP_COLOR[200],
          dark: APP_COLOR[900],
        },
      },
    },
  },
  plugins: [],
};
