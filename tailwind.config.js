/** Generates the utility classes used in src/ on top of the pre-built src/index.css
 * (which already has the base styles and the custom component classes). */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0b1528", 2: "#162544" },
        gold: { DEFAULT: "#b8860b", deep: "#8a6408", glow: "#d4af37", soft: "#f4e3b0" },
        paper: "#fbfaf7",
        cream: "#f5f0e6",
        "ink-2": "#3e4c5f",
        "ink-3": "#5b6a80",
        line: "#e6e1d6",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
