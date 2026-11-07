/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff', 100: '#d9ecff', 200: '#bcdcff', 300: '#8ec6ff',
          400: '#59a6ff', 500: '#3384ff', 600: '#1e63f5', 700: '#174de1',
          800: '#1940b6', 900: '#1a3b8f'
        },
        surface: {
          light: '#ffffff',
          dark: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
