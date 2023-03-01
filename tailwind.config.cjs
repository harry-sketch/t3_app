/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D9BF0",
        custom: {
          1: "#FFFFFF",
          2: "#B7BBC0",
          3: "#202124",
          4: "#EA80FC",
        },
      },
    },
  },
  plugins: [],
};
