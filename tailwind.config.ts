import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        mono:    ['var(--font-mono)',    'monospace'],
      },
      colors: {
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Surface renkleri CSS variable'a bağlı — dark/light mode otomatik güncellenir
        // Opacity modifier'lar için rgb(<alpha-value>) formatı kullanılıyor
        surface: {
          50:  'rgb(var(--s50)  / <alpha-value>)',
          100: 'rgb(var(--s100) / <alpha-value>)',
          200: 'rgb(var(--s200) / <alpha-value>)',
          300: 'rgb(var(--s300) / <alpha-value>)',
          400: 'rgb(var(--s400) / <alpha-value>)',
          500: 'rgb(var(--s500) / <alpha-value>)',
          600: 'rgb(var(--s600) / <alpha-value>)',
          700: 'rgb(var(--s700) / <alpha-value>)',
          800: 'rgb(var(--s800) / <alpha-value>)',
          900: 'rgb(var(--s900) / <alpha-value>)',
          950: 'rgb(var(--s950) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'grid-dark':        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'glow-brand':        'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,197,94,0.14), transparent)',
        'glow-brand-center': 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(34,197,94,0.06), transparent)',
      },
      animation: {
        'fade-up':       'fadeUp 0.5s ease forwards',
        'fade-in':       'fadeIn 0.4s ease forwards',
        'scroll-left':   'scrollLeft 30s linear infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow':          'glow 2.5s ease-in-out infinite alternate',
        'shimmer':       'shimmer 2.8s linear infinite',
        'float':         'float 9s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 3s infinite',
        'float-slow':    'float 12s ease-in-out 1.5s infinite',
        'scan':          'scan 5s linear infinite',
        'ping-slow':     'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'border-beam':   'borderBeam 4s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollLeft: {
          '0%':   { transform: 'translateX(0)'    },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 20px rgba(34,197,94,0.25)' },
          '100%': { boxShadow: '0 0 55px rgba(34,197,94,0.65)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)  rotate(0deg)'  },
          '33%':      { transform: 'translateY(-14px) rotate(1.2deg)' },
          '66%':      { transform: 'translateY(-6px)  rotate(-0.8deg)' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(900%)'  },
        },
        borderBeam: {
          '0%':   { backgroundPosition: '0% 50%'   },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
