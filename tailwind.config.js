/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        skin: {
          "cl100": "var(--color-100)",
          "cl300": "var(--color-300)",
          "cl500": "var(--color-500)",
          "cl700": "var(--color-700)",
          "cl900": "var(--color-900)",
        }
      },
      textColor: {
        skin: {
          "cl100": "var(--color-100)",
          "cl300": "var(--color-300)",
          "cl500": "var(--color-500)",
          "cl700": "var(--color-700)",
          "cl900": "var(--color-900)",
        }
      },
      screens:{
        'max-sm': {"max-width": "640px"},
      }
    },
  },
  plugins: [],
};
