/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-dark': '#1d4ed8',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '20px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'card': '0 40px 80px -18px rgba(0, 0, 0, 0.22)',
        'card-hover': '0 48px 96px -16px rgba(0, 0, 0, 0.28)',
      },
    },
  },
  plugins: [],
};
