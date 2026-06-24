import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#EDEAE4",
        card: "#E5E1DB",
        accent: "#9B2D6F",
        accentHover: "#7A2258",
        ink: "#1A1514",
        inkHover: "#3A302C",
        body: "#5C5450",
        muted: "#8C8480",
        divider: "#D4CFC9",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};

export default config;
