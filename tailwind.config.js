/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#faf8f5',
        charcoal: '#2a2a2a',
        accent: '#2d5450', // deep green
      },
    },
  },
  plugins: [],
};
