import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: { DEFAULT: "#00FF66", dark: "#00cc52" },
        ink: { DEFAULT: "#0f0f0f", soft: "#121212", card: "#1a1a1a" },
      },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], display: ["var(--font-display)", "system-ui", "sans-serif"] },
      boxShadow: { neon: "0 0 30px -5px rgba(0,255,102,0.5)" },
      keyframes: {
        pulseRing: { "0%": { transform: "scale(1)", opacity: "0.6" }, "100%": { transform: "scale(1.8)", opacity: "0" } },
      },
      animation: { pulseRing: "pulseRing 1.8s ease-out infinite" },
    },
  },
  plugins: [],
};
export default config;
