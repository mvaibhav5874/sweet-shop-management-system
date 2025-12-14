/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bakery: {
          cream: "#FFF7ED",
          caramel: "#D97706",
          honey: "#F59E0B",
          chocolate: "#92400E",
          soft: "#FEF3C7",
          dark: "#3F2A1D",
        },
      },
    },
  },
  plugins: [],
};
