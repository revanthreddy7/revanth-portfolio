/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'aos-animate', 
    'aos-init', 
    'fade-up', 
    'fade-down', 
    'fade-right', 
    'fade-left',
    'fade-in', 
    'fade-out'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fefae0',
        pastelblue: '#cce3f6',
        pastelgreen: '#d3f9d8',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        flybee: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(100vw, 30vh)' }, // will be dynamically overridden by inline styles
        },
        flicker: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out',
        flybee: 'flybee 7s linear infinite',
        flicker: 'flicker 0.8s infinite',


      }
    },
  },
  plugins: [],
}