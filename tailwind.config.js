/** @type {import('tailwindcss').Config} */

const {} = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#22c55e", light: "#bbf7d0", dark: "#064e3b" },
      },
    },
  },
  plugins: [],
};
