import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#fffbf8",
          soft: "#f7f2ed",
          line: "#ece4dc",
        },
        ink: {
          DEFAULT: "#232323",
          muted: "#4a4a4a",
          dim: "#7a7470",
        },
        brand: {
          DEFAULT: "#004aad",
          hover: "#0277b5",
          soft: "#e6efff",
        },
        footer: {
          DEFAULT: "#1c1d25",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        display: ["var(--font-league-spartan)", "Georgia", "serif"],
        script: ["var(--font-satisfy)", "cursive"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-bounce": {
          "0%": { transform: "translateY(3px)" },
          "100%": { transform: "translateY(-3px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "scroll-bounce": "scroll-bounce 1s infinite alternate-reverse",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
