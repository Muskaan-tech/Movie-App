/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        accent: "#E50914",
        "light-100": "#f5f5f5",
        "light-200": "#d4d4d4",
        "dark-100": "#1f1f1f",
      },
    },
  },
  plugins: [],
}
