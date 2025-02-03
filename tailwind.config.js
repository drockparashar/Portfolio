/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      extend: {
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
          'space-grotesk': ['Space Grotesk', 'sans-serif'],
        },
      },
    },
    plugins: [],
    keyframes: {
      fallingStar: {
        '0%': { transform: 'translate(0, -10px) rotate(45deg)', opacity: 1 },
        '100%': { transform: 'translate(300px, 300px) rotate(45deg)', opacity: 0 }
      },
    }
  }
  
  