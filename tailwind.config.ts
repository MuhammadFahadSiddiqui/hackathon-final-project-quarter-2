import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primarycolororg: "#FF9F0D",
        primarycolorgrean: "#195A00",
        primarycolorcoffee: "#BC9A6C",
        secondarycolor2:"#999966",
        secondarycolorBO:"#AF872F",
        secondarycolorcoffee:"#EDEAE3",
        black1: "#1E1E1E",
        ffffff:"#FFFFFF",
        secondarycolorwhite:"#FAF7F2",
        hover: "#A8BCA1",
        gray1: "#333333",
        gray2: "#4F4F4F",
        gray3: "#828282",
        gray4: "#BDBDBD",
        gray5: "#E0E0E0",
        ododod: "#0D0D0D",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
