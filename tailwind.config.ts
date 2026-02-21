import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#326CE5",
          foreground: "#FFFFFF",
          50: "#EBF1FD",
          100: "#D7E3FB",
          200: "#AFC7F7",
          300: "#87AAF3",
          400: "#5F8EEF",
          500: "#326CE5",
          600: "#1F56CC",
          700: "#1843A3",
          800: "#12307A",
          900: "#0C1E52",
        },
        k8s: "#326CE5",
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        destructive: "hsl(var(--destructive))",
        success: "#6EF09E",
        surface: "#14213D",
        dark: "#0D1526",
        "muted-text": "#93A1BC",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "orb-drift-1": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(60px, -80px) scale(1.1)" },
          "66%": { transform: "translate(-40px, 60px) scale(0.9)" },
        },
        "orb-drift-2": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-70px, 50px) scale(0.85)" },
          "66%": { transform: "translate(50px, -60px) scale(1.15)" },
        },
        "orb-drift-3": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(40px, 40px) scale(1.05)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "typewriter": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(50,108,229,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(50,108,229,0.6)" },
        },
        "grid-fade": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "orb-drift-1": "orb-drift-1 20s ease-in-out infinite",
        "orb-drift-2": "orb-drift-2 25s ease-in-out infinite",
        "orb-drift-3": "orb-drift-3 18s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(50,108,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(50,108,229,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "48px 48px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
