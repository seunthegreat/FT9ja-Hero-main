/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "white",
        secondary: "#246700",
        button: "#359602",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimGreen: "rgba(36, 103, 0, 0.1)",
      },
      backgroundColor: {
        'custom-color': 'rgba(36, 103, 0, 0.1)',
      },
      backgroundImage: {
        'custom-image': "url('https://source.unsplash.com/random')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};