/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Akira: ["Akira Expanded", "sans-serif"],
      },
      colors: {
        coolRed: "#dc2a36",
      },
    },
  },
  plugins: [],
};
