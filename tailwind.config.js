/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['var(--font-plus-jakarta-sans)'],
        outfit: ['var(--font-outfit)'],
      },
      colors: {
        offwhite: '#F8F8F8',
        lightgray: '#F0F0F0',
        darkgray: '#CCCCCC',
        black: '#333333',
        primary: '#FFA500',
        secondary: '#FF5733',
      }
    },
  },
  plugins: [],
}
