import colors from "tailwindcss/colors";

const appColors = [
  colors.amber,
  colors.cyan,
  colors.emerald,
  colors.sky,
  colors.rose,
  colors.teal,
  colors.yellow,
];

export const APP_COLOR =
  appColors[Math.floor(Math.random() * appColors.length)];
