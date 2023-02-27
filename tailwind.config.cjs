/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D9BF0",
        custom: {
          1: "#dae7ef",
        },
      },
    },
  },
  plugins: [],
};
