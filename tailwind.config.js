/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",    // синий
        accent: "#8B5CF6",     // фиолетовый
        secondary: "#10B981",  // зеленый
        background: "#FFFFFF", // белый
        text: "#1F2937",       // темно-серый
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        system: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 