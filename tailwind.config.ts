import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tm-red": "#F25D52",
        "tm-green": "#3BB273",
        "tm-yellow": "#F7EC59",
        "tm-violet": "#231942",
      },
      fontFamily: {
        poiret_one: ["var(--font-poiret_one)"],
      },
    },
  },
};
export default config
