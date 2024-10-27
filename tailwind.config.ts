import type { Config } from "tailwindcss";
import twanimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "50": "#fdffe5",
          "100": "#f7ffc8",
          "200": "#eeff97",
          "300": "#defc5a",
          "400": "#c9f223",
          "500": "#add909",
          "600": "#86ad03",
          "700": "#658407",
          "800": "#51680c",
          "900": "#435710",
          default: "#c9f223",
          // '950': '#223102'
        },
      },
      fontFamily: {
        body: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [twanimate],
};
export default config;
