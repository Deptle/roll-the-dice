/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#eb4d4c",
        bgSelected: "#f2f2f2"
      },
    },
  },
  plugins: [],
}
