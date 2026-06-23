/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0b0b0d',
        surface: '#141416',
        'surface-2': '#1b1b1f',
        line: '#27272c',
        ink: '#f4f1ea',
        'ink-dim': '#b6b4ad',
        'ink-mute': '#83817b',
        accent: {
          DEFAULT: '#3ecf8e',
          soft: '#2aa873',
          dim: 'rgba(62,207,142,0.14)',
        },
        gold: {
          DEFAULT: '#f6b745',
          soft: '#d99a2b',
        },
        clay: '#e2725b',
        mauve: '#c084a8',
        mint: '#7dd3c0',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        slide: '1180px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.25)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease both',
        drift: 'drift 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
