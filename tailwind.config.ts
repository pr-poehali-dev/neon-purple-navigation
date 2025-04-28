
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
        pink: {
          DEFAULT: "#ff00ff",
          50: "#fdf2ff",
          100: "#fae6ff",
          200: "#f3cdff",
          300: "#eba4ff",
          400: "#e066ff",
          500: "#d633ff",
          600: "#cc00ff",
          700: "#a700cc",
          800: "#8c00a7",
          900: "#730087",
          950: "#4a0057",
        },
      },
    },
  },
  plugins: [],
};

export default config;
