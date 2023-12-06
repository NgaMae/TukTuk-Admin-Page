/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Akronim: ['"Akronim"', "cursive"],
        SometypeMono: ['"Sometype Mono"', "cursive"],
        Ubuntu: ['"Ubuntu"', "cursive"],
        Montserrat: ['"Montserrat"', "cursive"],
      },
      backgroundImage: {
        sunset: "url('/src/assets/authBg.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
