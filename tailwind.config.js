/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette per the AOA "Website Revenue Engine" framework:
        // black, charcoal, white, metallic gray + ONE accent.
        // Change the accent in ONE place: app/globals.css -> --accent
        asphalt: "rgb(var(--asphalt) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        panel2: "rgb(var(--panel-2) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        chrome: "rgb(var(--chrome) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "flag-green": "rgb(var(--flag-green) / <alpha-value>)",
        "flag-yellow": "rgb(var(--flag-yellow) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Anton", "Arial Narrow", "sans-serif"],
        sans: ["Archivo", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        site: "80rem",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 32s linear infinite",
      },
    },
  },
  plugins: [],
};
