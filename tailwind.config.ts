import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#030712",
        obsidian: "#060B19",
        navy: "#0A1128",
        cyanGlow: "#00F0FF",
        blueNeon: "#2563EB",
        purpleNeon: "#8B5CF6",
        magentaNeon: "#EC4899",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        "neon-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.35), 0 0 10px -5px rgba(0, 240, 255, 0.2)",
        "neon-purple": "0 0 25px -5px rgba(139, 92, 246, 0.35), 0 0 10px -5px rgba(139, 92, 246, 0.2)",
        "glass-inset": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15), 0 20px 40px -15px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
