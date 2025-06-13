/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class', // or 'media' if you want to use the system preference
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Code"', 'monospace'],
        mono: ['"Fira Code"', 'monospace'],
        'koulen': ['Koulen', 'cursive'],
        'space-mono': ['"Space Mono"', 'monospace'],
        'spaceMono': ['"Space Mono"', 'monospace'],
      },
      colors: {
        'termlyPurple': {
          500: '#6366f1',
          700: '#4f46e5',
        }
      },
      backgroundColor: {
        'termly-hp-1': '#f1f5f9',
      }
    },
  },
  plugins: [],
};