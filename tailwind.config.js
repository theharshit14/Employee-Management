/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      abc: ["Montserrat", "sans-serif"],
    },
    variants: {
      opacity: ({ after }) => after(['disabled'])
    },
  },
  plugins: [],
}

