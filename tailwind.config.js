/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#C778DD",
      gray: "#ABB2BF",
      background: "#282C33",
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        firacode: ["Fira Code", "sans-serif"],
      },
    },
  },
  plugins: [],
};
