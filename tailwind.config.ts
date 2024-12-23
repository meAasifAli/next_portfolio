import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


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
  plugins: [
    addVariablesForColors
  ],
};
export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
