/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors (Readable base)
        'warm-white': '#faf8f5', // Main background
        charcoal: '#2a2a2a', // Main text
        // Navy/Gold Accents (Client requested)
        'navy-deep': '#1a2332', // Navy accent (nav, footer, highlights)
        'gold-rich': '#d4af37', // Gold accent (CTAs, highlights)
        'gold-accent': '#c5a572', // Subtle gold
        accent: '#2d5450', // Keep original green as fallback
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
