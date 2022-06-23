/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    fontFamily: {
      default: ["Overpass"],
    },
    fontWeight: {
      hairline: 50,
      exlight: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 450,
      semibold: 500,
      bold: 600,
      extrabold: 700,
      extrax: 800,
      black: 900,
    },
    extend: {
      colors: {
        nav: "#0A5ACF",
        footer: "#0A043C",
      },
      dropShadow: {
        text: "rgba(0, 0, 0, 0.1)",
      },
      screens: {
        m: "360px",
        // => @media MOBILE - VERSION (min-width:  360px) { ... }
  
        d: "1366px",
        // => @media DEKSTOP -VERSION (min-width: 1366px) { ... }
      },
    },
  },
  plugins: [],
};
