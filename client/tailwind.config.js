/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryText: "#030303",
    },
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        inria: ["Inria Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
