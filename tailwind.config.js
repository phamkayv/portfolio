/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdf8',
          100: '#fdf9e7',
          200: '#faf0c4',
          300: '#f6e197',
          400: '#f0cc68',
          500: '#e8b647',
          600: '#d79d2b',
          700: '#b47d23',
          800: '#926026',
          900: '#785023',
        },
        sage: {
          50: '#f4f6f3',
          100: '#e6ebe4',
          200: '#cfd8cb',
          300: '#b0bfa9',
          400: '#8d9f83',
          500: '#708066',
          600: '#58664f',
          700: '#475241',
          800: '#3a4336',
          900: '#30372d',
        },
        terracotta: {
          50: '#fef6f1',
          100: '#fdeadd',
          200: '#fad1bb',
          300: '#f6b08e',
          400: '#f18860',
          500: '#eb6840',
          600: '#d94f2a',
          700: '#b53e20',
          800: '#90321e',
          900: '#742b1d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};