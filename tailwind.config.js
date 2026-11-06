/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          cyan: {
            50: '#ecfdfc',
            100: '#cff9f6',
            200: '#a3f2ed',
            300: '#67e6de',
            400: '#22d3c9',
            500: '#0ec4b6',
            600: '#079d94',
            700: '#0b7c76',
            800: '#0e625e',
            900: '#11514e',
          },
          red: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
          navy: {
            800: '#152438',
            900: '#0d1829',
            950: '#070d18',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
