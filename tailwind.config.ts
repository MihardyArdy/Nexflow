import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        instrument: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#050505",
          1: "#0a0a0a",
          2: "#0e0e0e",
          3: "#131313",
          4: "#1a1a1a",
        },
        fg: {
          DEFAULT: "#ededed",
          muted: "#a3a3a3",
          subtle: "#8a8a8a",
        },
        border: {
          DEFAULT: "#1c1c1c",
          2: "#2a2a2a",
        },
        accent: {
          DEFAULT: "#10b981",
          2: "#34d399",
          soft: "rgba(16,185,129,0.12)",
        },
        indigo: {
          DEFAULT: "#6366f1",
          2: "#818cf8",
        },
      },
      maxWidth: {
        content: "1200px",
        prose: "640px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        "extra-tight": "-0.03em",
      },
      fontSize: {
        // editorial display scale (clamp = fluid)
        "display-1": ["clamp(2.75rem, 8vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-2": ["clamp(2rem, 5vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "display-3": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
      },
      boxShadow: {
        // 1px inner highlight on top + soft drop = premium card material
        card: "inset 0 1px 0 0 rgba(255,255,255,0.04), 0 1px 2px 0 rgba(0,0,0,0.4)",
        "card-hover":
          "inset 0 1px 0 0 rgba(255,255,255,0.07), 0 14px 44px -14px rgba(0,0,0,0.7)",
        glow: "0 0 40px -8px rgba(16,185,129,0.45)",
        "glow-lg": "0 0 90px -20px rgba(16,185,129,0.55)",
        "glow-indigo": "0 0 50px -12px rgba(99,102,241,0.45)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22,0.61,0.36,1)",
        "out-back": "cubic-bezier(0.34,1.56,0.64,1)",
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "fade-up": "fadeUp 0.5s cubic-bezier(0.22,0.61,0.36,1) forwards",
        "typing-1": "typingBounce 1.2s ease-in-out 0s infinite",
        "typing-2": "typingBounce 1.2s ease-in-out 0.2s infinite",
        "typing-3": "typingBounce 1.2s ease-in-out 0.4s infinite",
        "bubble-in": "bubbleIn 0.4s cubic-bezier(0.22,0.61,0.36,1) forwards",
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        typingBounce: {
          "0%,60%,100%": { transform: "translateY(0)", opacity: "0.4" },
          "30%": { transform: "translateY(-4px)", opacity: "1" },
        },
        bubbleIn: {
          from: { opacity: "0", transform: "translateY(8px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
