/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        vfit: { black: '#050608', gold: '#D4AF37', white: '#F9FAFB' },
        // 1. Cyber-Athlete
        cyber: {
          black: '#0c0c0e',
          grey: '#1a1a1f',
          metal: '#2d2d33',
          cyan: '#00f5ff',
          violet: '#a855f7',
        },
        // 2. Bio-Hacker
        bio: {
          white: '#fafbfc',
          grey: '#e8ecef',
          blue: '#1e3a5f',
          green: '#0d9488',
        },
        // 3. Brutalist
        brutal: {
          cement: '#6b7280',
          dark: '#111827',
          yellow: '#facc15',
          black: '#000000',
        },
        // 4. Wellness Zen
        zen: {
          cream: '#f5f0e8',
          beige: '#e8dfd0',
          earth: '#8b7355',
          olive: '#6b7c3c',
        },
        // 5. Luxury Stealth
        luxury: {
          navy: '#0f172a',
          forest: '#14532d',
          gold: '#c9a227',
          champagne: '#f5e6d3',
        },
        // 6. Kinetic Energy
        kinetic: {
          red: '#dc2626',
          blue: '#2563eb',
          white: '#f8fafc',
          dark: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        luxury: ['Cormorant Garamond', 'Georgia', 'serif'],
        brutal: ['Bebas Neue', 'Impact', 'sans-serif'],
        zen: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
        'cyber-glow': '0 0 20px rgba(0,245,255,0.3)',
        'brutal': '4px 4px 0 0 #000',
      },
    },
  },
  plugins: [],
};
