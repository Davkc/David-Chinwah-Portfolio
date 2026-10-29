/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { accent: { DEFAULT: '#4c7061', dark: '#87b79d' } }, fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] } } },
  plugins: [],
}
