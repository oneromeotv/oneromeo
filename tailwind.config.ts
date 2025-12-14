// 1. IMPORT the colors using ES Module syntax
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use for all standard body text utilities (text-base, etc.)
        sans: ['var(--font-inter)', 'sans-serif'],
        // Add a specific utility for headings if you want to explicitly use Poppins
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

// 3. EXPORT using ES Module syntax
export default config;
