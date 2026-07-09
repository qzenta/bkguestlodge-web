import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "slate-teal": "#1E3A3A",
        "warm-sand": "#F3ECDD",
        "ochre-clay": "#C97D3E",
        "cornflower-dusk": "#4F6F8F",
        "charcoal-ink": "#2A2521",
        "soft-ivory": "#FBF8F2",
      },
      fontFamily: {
        display: ["var(--font-spectral)", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        utility: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      maxWidth: {
        "8xl": "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
