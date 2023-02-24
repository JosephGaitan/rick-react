/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        creep:"'Creepster', cursive",
      }
    },
  },
  plugins: [],
}
