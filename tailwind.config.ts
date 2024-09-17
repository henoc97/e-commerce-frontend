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
        background: "var(--background)",
        foreground: "var(--foreground)",
        sapphire: '#1E3A8A',
        turquoise: '#38BDF8',
        darkgray: '#111827',
        mintgreen: '#34D399',
        salmon: '#FB923C',
        bordeaux: '#B91C1C',
        royalpurple: '#8B5CF6',
        offwhite: '#F9FAFB',
        lightgray: '#F3F4F6',
        bluishgray: '#6B7280',
      },
    },
  },
  plugins: [],
};
export default config;
