/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#1e40af',
          900: '#1e3a8a',
        },
        green: {
          600: '#16a34a',
          700: '#166534',
        },
        amber: {
          300: '#fcd34d',
          400: '#fbbf24',
          900: '#78350f',
        },
        beige: '#f5f5dc',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/paper.png')",
      },
    },
  },
  plugins: [],
};