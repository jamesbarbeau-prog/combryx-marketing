import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cb: {
          black:     '#000000',
          dark1:     '#0a0a0a',
          dark2:     '#111111',
          dark3:     '#1a1a1a',
          dark4:     '#222222',
          gold:      '#FFB800',
          gold2:     '#FFC933',
          gold3:     '#FFD966',
          'gold-dk': '#CC9200',
          white:     '#F5F5F5',
          silver:    '#C8C8C8',
          muted:     '#888888',
          dim:       '#444444',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      boxShadow: {
        gold:     '0 0 24px rgba(255,184,0,0.25)',
        'gold-lg':'0 0 48px rgba(255,184,0,0.35)',
        'gold-sm':'0 0 12px rgba(255,184,0,0.20)',
      },
      animation: {
        'hex-drift':  'hexDrift 60s linear infinite',
        'marquee':    'marquee 36s linear infinite',
        'fade-up':    'fadeUp 0.7s ease forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        hexDrift:  { '0%': { backgroundPosition: '0 0' },     '100%': { backgroundPosition: '80px 184px' } },
        marquee:   { '0%': { transform: 'translateX(0)' },    '100%': { transform: 'translateX(-50%)' } },
        fadeUp:    { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pulseGold: { '0%,100%': { opacity: '0.4' },           '50%': { opacity: '0.8' } },
      },
    },
  },
  plugins: [],
}

export default config
