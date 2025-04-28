import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        "card-bg": "#1a1a24",
        "neon-purple": "rgb(153, 102, 255)",
        "neon-pink": "rgb(255, 0, 255)",
        "neon-blue": "rgb(51, 153, 255)",
        purple: {
          DEFAULT: "#9966ff",
          50: "#f5f0ff",
          100: "#ede5ff",
          200: "#d9ccff",
          300: "#baa3ff",
          400: "#a685ff",
          500: "#9966ff",
          600: "#7a3aff",
          700: "#6929f7",
          800: "#5920d2",
          900: "#4a1cae",
          950: "#2c0d73",
        },
      },
    },
  },
  plugins: [],
};

export default config;
