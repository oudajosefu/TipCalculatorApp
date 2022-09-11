/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'monospace'],
      },
      colors: {
        'strong-cyan': 'hsl(172,67%,45%)',
        'very-dark-cyan': 'hsl(183,100%,15%)',
        'grayish-cyan': {
          100: 'hsl(189,41%,97%)',
          200: 'hsl(185,41%,84%)',
          300: 'hsl(184,14%,56%)',
          400: 'hsl(186,14%,43%)',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
