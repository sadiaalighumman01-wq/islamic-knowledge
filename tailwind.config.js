/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        islamic: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        emerald: {
          deep: '#064e3b',
          rich: '#047857',
          mint: '#10b981',
          soft: '#d1fae5',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f9f6f0',
          200: '#f3ece0',
          300: '#ebdccb',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        arabic: ['"Amiri"', '"Scheherazade New"', '"Traditional Arabic"', 'serif'],
        quran: ['"Amiri Quran"', '"Amiri"', 'serif'],
      },
      boxShadow: {
        'islamic': '0 10px 25px -5px rgba(6, 78, 59, 0.08), 0 8px 10px -6px rgba(6, 78, 59, 0.04)',
        'islamic-lg': '0 20px 30px -10px rgba(6, 78, 59, 0.12), 0 10px 15px -5px rgba(6, 78, 59, 0.06)',
        'gold-glow': '0 0 20px rgba(245, 158, 11, 0.25)',
      }
    },
  },
  plugins: [],
}
