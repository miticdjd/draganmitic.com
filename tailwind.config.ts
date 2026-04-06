import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        familjen: ['var(--font-familjen)', 'sans-serif'],
      },
      colors: {
        brand: 'var(--brand-color)',
      },
      animation: {
        reveal: 'reveal 0.8s cubic-bezier(0, 0, 0.2, 1) forwards',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
