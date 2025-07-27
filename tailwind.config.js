/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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
      colors: {
        'primary-dark': '#031240',
        'primary': '#0726D9',
        'primary-light': '#1760BF',
        'accent': '#3D9DF2',
        'accent-light': '#52C5F2',
        
        'base-100': '#FFFFFF',       
        'base-200': '#F5F5F5',       
        'base-content': '#031240',   
        
        'dark-base-100': '#020f3a',  
        'dark-base-200': '#031240',  
        'dark-base-content': '#FFFFFF', 

        'legal-accent': '#D7F205',
        'legal-accent-light': '#EAF205',
        'legal-accent-dark': '#7D8C0B',
        'legal-bg': '#0D0D0D',
        'legal-bg-secondary': '#1A1A1A',
        'legal-text': '#FFFFFF',
        'legal-text-secondary': '#A6A6A6',
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        pulseBg: 'pulseBg 8s ease-in-out infinite',
        marquee: 'marquee 80s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseBg: {
          '0%, 100%': { opacity: 0.1 },
          '50%': { opacity: 0.25 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
