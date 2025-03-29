/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06324c",
        secondary: "#e56959",
        tertiary: "#0A1828",
        primary_text: "#06324c",
        background: "#f1f1f1",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
        inner_shadow: "inset 0 0 30px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
