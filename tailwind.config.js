/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './script.js',
  ],
  safelist: [
    'hidden',
    'opacity-0',
    'opacity-100',
    'scale-95',
    'scale-100',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'transform',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}