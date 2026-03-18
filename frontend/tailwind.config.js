/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        oxigeno: {
          black: "#0a0a0a",
          dark: "#141414",
          yellow: "#FFD700",
          yellowDark: "#E6C200",
          white: "#ffffff",
          gray: "#a3a3a3",
        },
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 215, 0, 0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(255, 215, 0, 0)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2s infinite",
        "fade-in": "fadeIn 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
