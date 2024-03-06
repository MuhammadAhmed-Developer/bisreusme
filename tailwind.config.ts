import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Claris-sans": ["Claris Sans", "sans-serif"],
        // "DM-Sans": ['DM Sans'," sans-serif"],
        // "Neutral": ["Neutral", "neutral"],
        // "Poppins": ["var(--font-poppins)"],
        // "Cursive": ["Cursive", "cursive"],
        // "Monospace": ["Monospace", "monospace"],
        "Teko": ["Teko", "teko"],
        "Prompt": ["prompt", "prompt"],
        // "Lobster": ["lobster", "lobster"],
        "Ubuntu": ["ubuntu", "ubuntu"],
        "Roboto": ["roboto", "roboto"],
        "OpenSans": ["opensans", "opensans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-blue": "#2871DE",
        "section-bg": "#F0F2F5",
        "faq-bg": "#efefef66",
        "medium-blue": "#102D59",
        "placeholder-text": "#8A8A94",
        "body-text": "#101010",
        "sky-light": "#EAF1FC",
        "sky-mid": "#D4E3F8",
        "dark-blue": "#0C2243",
        "sky-normal": "#7EAAEB",
        "sky-formal": "#BFD4F5",
        "sky-secondary": "#A9C6F2",
        "faq-text": "#5E5E5F",
      },
    },
  },
  plugins: [],
};
export default config;
