/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        vfit: {
          black: '#050608',
          gold: '#D4AF37',
          white: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

