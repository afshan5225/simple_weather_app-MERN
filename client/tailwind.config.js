/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5044E5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // <-- this line adds the font
      },
    },
  },
  plugins: [],
};
