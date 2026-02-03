/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blueLight: '#3DB4F2',
          blueMedium: '#1E8FE1',
          blueDark: '#0A4FA3',
          blueDeep: '#072F6E',
          greenLight: '#6BCF3D',
          greenMedium: '#3FAE2A',
          greenDark: '#2E7D22',
          slateDeep: '#0f172a',
          offWhite: '#f8fafc'
        }
      }
    }
  },
  plugins: [],
}
