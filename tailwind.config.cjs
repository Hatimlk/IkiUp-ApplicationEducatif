/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./translations.ts"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: 'var(--bg-background)',
        surface: 'var(--bg-surface)',
        text: 'var(--text-main)',
        primary: '#5A73E8',
        secondary: '#F6DE7A',
        'blue-sec': '#8FA1F3',
        'gray-ui': '#E6E8EF',
        'dark-blue': '#0F172A',
        emerald: '#1CC48C',
        rose: '#BC1E54',
        indigo: '#4B0082',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3.5rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
