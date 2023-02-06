/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('src/assets/bg.jpg')",
        'bg-login': "url('src/assets/bg-login.jpg')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
