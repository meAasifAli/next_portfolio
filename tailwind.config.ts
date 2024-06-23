import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playwrite': ["Playwrite NG Trad", 'cursive'],
        'bebasNue': ["Bebas Neue", 'sans-serif'],
        'manRope': ["Manrope", 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
