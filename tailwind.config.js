/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary-hsl) / <alpha-value>)",
        light: "hsl(var(--primary-light-hsl) / <alpha-value>)",
        dark: "hsl(var(--primary-dark-hsl) / <alpha-value>)",
      },
      boxShadow: {
        outline: "0 0 0 2px hsl(200, 100%, 50%)",
        error: "0 0 0 2px red",
        success: "0 0 0 2px green",
        form: "0 0 15px 0 hsl(200, 100%, 6%, 0.7)",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
