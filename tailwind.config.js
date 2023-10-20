/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      light: {
        primary: '#ffffff', // Replace with your light theme primary color
        secondary: '#f5f5f5', // Replace with other light theme colors
      },
      dark: {
        primary: '#333333', // Replace with your dark theme primary color
        secondary: '#1a1a1a', // Replace with other dark theme colors
      },
      fontFamily: {
        Rancho: ["Rancho", "cursive"],
        Nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

