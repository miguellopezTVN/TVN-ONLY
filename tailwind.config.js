/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // Si tienes la carpeta pages
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}', // Añade tu carpeta personalizada

  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
