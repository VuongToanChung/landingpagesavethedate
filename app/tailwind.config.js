/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'surface-primary': '#fbf9f5', 
        'on-surface': '#31332f',
        'inverse-surface': '#0e0e0d',
        'primary-brand': '#785a1a',
        'primary-container': '#fbd185',
        'secondary-brand': '#625e5b',
        'tertiary-brand': '#6b5d49',
        'surface-low': '#f5f4ef',
        'surface-container': '#efeee9',
        'outline-variant': '#b2b2ad',
        'accent-color': '#E8D8C4',
        'primary-override': '#C5A059'
      },
      fontFamily: {
        'headline': ['"Noto Serif"', 'serif'],
        'body': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
