/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#FF5733",
      },
      animation: {
        fadeOut: "fadeOut 5s ease-in-out",
      },
    },
    keyframes: {
        fadeOut: {
          '0%': { backgroundColor: 'red.300' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
  },
  plugins: [],
};

