import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F33",
        royal: "#155EEF",
        green: "#16A36A",
        gold: "#C9973B",
        mist: "#F2F6FC",
        slateText: "#475569"
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 48px rgba(11,31,51,0.10)"
      }
    }
  },
  plugins: []
};

export default config;
