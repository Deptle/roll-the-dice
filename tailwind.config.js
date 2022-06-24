/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
      "./js/**/*.{js}",
      "./css/**/*.{.css}",
      "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f111a",
        secondary: "#ea4d4c",
      },
    },
  },
  plugins: [],
}
