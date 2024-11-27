/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.2)' },
          '45%': { transform: 'rotate(-15deg) scale(1.2)'},
          '52%': { transform: 'rotate(15deg) scale(1.2)' },
          '57%': { transform: 'rotate(-15deg) scale(1.2)' },
          '62%': { transform: 'rotate(15deg) scale(1.2)' },
          '75%': { transform:'scale(1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

