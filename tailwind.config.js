/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#640D5F",
        secondary: "#D91656",
        btnColor: "#EB5B00",
        lastColor: "#FFB200",
      },
      colors: {
        primary: "#640D5F",
        secondary: "#D91656",
        btnColor: "#EB5B00",
        lastColor: "#FFB200",
      },
      fontFamily: {
        title: ["Bungee Spice", "sans-serif"],
        custom: ["Poppins", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
