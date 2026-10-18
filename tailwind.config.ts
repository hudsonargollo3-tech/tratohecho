import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marca Trato Hecho — verde trato + oro sol de Santa Cruz
        ink: "#0F1F19",
        surface: "#F7F5EE",
        forest: {
          DEFAULT: "#0E3B2E",
          light: "#17523F",
          dark: "#092A21",
        },
        gold: {
          DEFAULT: "#E3A62F",
          light: "#F2C566",
          dark: "#B98320",
        },
        wa: {
          green: "#25D366",
          bubble: "#DCF8C6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-lexend)", "Lexend", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgb(14 59 46 / 0.18)",
        phone: "0 24px 60px -20px rgb(9 42 33 / 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
