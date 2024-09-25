// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the 'app' directory
    './components/**/*.{js,ts,jsx,tsx}',
    // Include other directories if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};