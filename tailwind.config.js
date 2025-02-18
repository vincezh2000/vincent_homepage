/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'honk': ['Honk', 'system-ui'],
        'barrio': ['Barrio', 'cursive'],
        'bubblegum': ['Bubblegum Sans', 'cursive'],
        'tulpen': ['Tulpen One', 'cursive'],
        'poiret': ['Poiret One', 'cursive'],
      },
    },
  },
  plugins: [],
};
