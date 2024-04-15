/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2fbf3",
          100: "#e1f7e4",
          200: "#c5edca",
          300: "#98dda2",
          400: "#74cb81",
          500: "#3ea94e",
          600: "#2e8b3c",
          700: "#276e33",
          800: "#23582c",
          900: "#1f4826",
          950: "#0c2711",
        },
      },
    },
  },
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  plugins: [require("taos/plugin")],
};
