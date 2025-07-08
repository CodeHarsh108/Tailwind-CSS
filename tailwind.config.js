/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './index.html',             // If your HTML is at root
    './src/**/*.{js,ts,jsx,tsx}' // All React component files
  ],
  theme: {
    extend: {}, // Customize your theme here if needed
  },
  plugins: [],
}
