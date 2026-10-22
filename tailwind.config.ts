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
        void: "#080b11",
        obsidian: "#0b0f19",
        navy: "#0f172a",
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        cyanGlow: "#38bdf8",
        blueNeon: "#3b82f6",
        purpleNeon: "#6366f1",
        magentaNeon: "#ec4899",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        "neon-cyan": "0 0 20px -3px rgba(56, 189, 248, 0.25), 0 0 8px -2px rgba(56, 189, 248, 0.15)",
        "neon-purple": "0 0 20px -3px rgba(99, 102, 241, 0.25), 0 0 8px -2px rgba(99, 102, 241, 0.15)",
        "glass-inset": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), 0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        "soft-blue": "0 0 25px -5px rgba(59, 130, 246, 0.25), 0 0 10px -5px rgba(59, 130, 246, 0.15)",
        "soft-indigo": "0 0 25px -5px rgba(99, 102, 241, 0.25), 0 0 10px -5px rgba(99, 102, 241, 0.15)",
        "card-elevated": "0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
