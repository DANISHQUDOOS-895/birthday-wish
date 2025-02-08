/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        flicker: 'flicker 1.5s infinite',
        flame: 'flame 1s infinite',
        popup: 'popup 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};