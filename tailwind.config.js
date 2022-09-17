/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: "#10B981",
          light: "#D1FAE5",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
