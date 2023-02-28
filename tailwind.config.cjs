/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D9BF0",
        custom: {
          1: "#dae7ef",
          2: "#EFF3F4",
        },
      },
    },
  },
  plugins: [],
};
