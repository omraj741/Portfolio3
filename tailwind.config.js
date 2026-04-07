/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#22d3ee',
          violet: '#a78bfa',
          pink: '#f472b6',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.35)',
      },
      backgroundImage: {
        glass:
          'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
      },
    },
  },
  plugins: [],
};
