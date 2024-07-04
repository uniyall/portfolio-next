import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "lightMode-brown": "#362D26",
        "lightMode-orange": "#CF4B2E",
        "lightMode-green": "#074A40",
        "darkMode-brown": "#FFD8BA",
        "darkMode-orange": "#FFB8A8",
        "darkMode-green": "#A3FFF1",
        "pt-border--green": "#729055",
        "pt-border--brown": "#CAC3A8",
        "pt-border--blue": "#C8DAF0",
      },
    },
    fontFamily: {
      fancyHeading: ["var(--font-squarepeg)"],
      common: ["var(--font-spacegrotesk)"],
    },
    fontSize: {
      "h1-putech": "76.3px",
      "h2-putech": "61px",
      "h3-putech": "48.8px",
      "h4-putech": "39.1px",
      "h5-putech": "31.3px",
      "h6-putech": "25px",
      "para-l-putech": ["20px", "20px"],
      "para-m-putech": ["16px", "16px"],
      "para-s-putech": "12.8px",
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;
