import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        cream: "#FAF8F5",
        bgSoft: "#FAF8F5",
        bgDark: "#1A1A1A",
        card: "#FFFFFF",
        pinkSoft: "#F5EEE8",
        accent: "#C9A98A",
        accentHover: "#B8946F",
        accent2: "#E8D5C4",
        ink: "#1A1A1A",
        inkHover: "#3A302C",
        body: "#2C2C2C",
        muted: "#8A8A8A",
        divider: "#E5E0D8",
        heading: "#2C2C2C",
        catlabel: "#8A8A8A",
        bodytext: "#2C2C2C",
        automuted: "#8A8A8A",
        dividerlight: "#E5E0D8",
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
