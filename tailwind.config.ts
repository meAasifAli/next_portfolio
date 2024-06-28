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
        'manRope': ["Manrope", 'sans-serif'],
        'amenti': ['Amenti', 'sans-serif']
      },
      fontWeight: {
        'bold': '700',
        'medium': '500',
        'regular': '400',
        'light': '300',


      }
    },
  },
  plugins: [],
};
export default config;
