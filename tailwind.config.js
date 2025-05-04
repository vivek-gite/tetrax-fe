/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class', // or 'media' if you want to use the system preference
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Code"', 'monospace'],
        mono: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
};