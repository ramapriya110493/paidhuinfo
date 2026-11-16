/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          900: '#451638',
          800: '#662654', // Paidhu Deep Plum
          700: '#7b2e65',
        },
        beige: {
          100: '#F7F6F3',
          200: '#EDE7D7', // Paidhu Warm Beige
          300: '#E0D8C5',
        },
        charcoal: {
          800: '#252525',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
