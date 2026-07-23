import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F33",
        royal: "#155EEF",
        green: "#0E7A4F",
        gold: "#D6A437",
        mist: "#F4F7F2",
        cream: "#FFF8EA",
        burgundy: "#8B1E2D",
        slateText: "#536052"
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 48px rgba(20,45,32,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
