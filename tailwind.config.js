/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // Your existing custom font family is preserved here
      fontFamily: {
        sans: [
          "Inter Tight",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      // The new color palette is added alongside it
      colors: {
        'primary-dark': '#031240',
        'primary': '#0726D9',
        'primary-light': '#1760BF',
        'accent': '#3D9DF2',
        'accent-light': '#52C5F2',
        
        // Semantic colors for easy theming
        'base-100': '#FFFFFF',       // Light mode background
        'base-200': '#F5F5F5',       // Light mode subtle background
        'base-content': '#031240',   // Light mode text
        
        'dark-base-100': '#020f3a',  // Dark mode background
        'dark-base-200': '#031240',  // Dark mode subtle background
        'dark-base-content': '#FFFFFF', // Dark mode text
      },
       animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};