/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a2540', // dark navy
        accent: '#daab21', // gold accent
        neutral: '#f7f9fc', // very light gray for light sections
      },
    },
  },
  plugins: [],
};