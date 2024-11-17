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
        background: {
          DEFAULT: "#4A4947",
          light: "#5D5C59",
          dark: "#373532",
          darker: "#2A2826",
        },
        foreground: {
          DEFAULT: "#FAF7F0",
          muted: "#E8E5DE",
          dark: "#D8D5CE",
        },
        primary: {
          DEFAULT: "#B17457",
          light: "#C08B72",
          dark: "#955D42",
          darker: "#7A4C36",
        },
        secondary: {
          DEFAULT: "#D8D2C2",
          light: "#E5E0D4",
          dark: "#C2BAA7",
          darker: "#ADA594",
        },
        accent: {
          terra: "#E67E22",
          sage: "#7D8471",
          cream: "#FFF5E1",
          coffee: "#6F4E37",
        },
      },
    },
  },
  plugins: [],
};

export default config;
