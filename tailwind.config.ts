import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        panel: "hsl(var(--panel) / <alpha-value>)",
        panel2: "hsl(var(--panel-2) / <alpha-value>)",
        line: "hsl(var(--line) / <alpha-value>)",
        text: "hsl(var(--text) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          soft: "hsl(var(--accent-soft) / <alpha-value>)"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 120px rgba(46, 91, 255, 0.24)",
        glowStrong: "0 0 0 1px rgba(255,255,255,0.12), 0 30px 140px rgba(120, 80, 255, 0.34)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-14px,0) scale(1.02)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
