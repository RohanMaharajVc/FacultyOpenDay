/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        education: {
          light: '#E3F2FD',
          DEFAULT: '#2196F3',
          dark: '#1976D2',
        },
        law: {
          light: '#F3E5F5',
          DEFAULT: '#9C27B0',
          dark: '#7B1FA2',
        },
        commerce: {
          light: '#E8F5E9',
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
        },
        humanities: {
          light: '#FFF3E0',
          DEFAULT: '#FF9800',
          dark: '#F57C00',
        },
      },
    },
  },
  plugins: [],
}

