/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        // Premium dark theme colors
        'bg': '#09090b',
        'bg-2': '#0c0c0f',
        'bg-card': '#18181b',
        'bg-elevated': '#27272a',
        'bg-surface': '#3f3f46',

        // Primary & accent
        'primary': '#3b82f6',
        'accent': '#a855f7',
        'success': '#22c55e',
        'warning': '#f97316',
        'cyan': '#06b6d4',

        // Text
        'text': '#fafafa',
        'text-secondary': '#a1a1aa',
        'text-dim': '#71717a',
        'text-muted': '#52525b',

        // Legacy support
        'cosmic': '#09090b',
        'cosmic-2': '#18181b',
        'cosmic-3': '#27272a',
      },
      fontFamily: {
        'sans': ['Inter', 'Outfit', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['JetBrains Mono', 'SF Mono', 'monospace'],
        'display': ['Inter', 'sans-serif'],
        'signature': ['Great Vibes'],
        'Outfit': ['Outfit', 'sans-serif'],
        'Orbitron': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'spinReverse 16s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-left': 'fadeLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-right': 'fadeRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blob': 'blob 8s ease-in-out infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'gradient': 'gradient 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(59, 130, 246, 0.2)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '25%': { borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%' },
          '50%': { borderRadius: '30% 70% 40% 60% / 70% 40% 60% 30%' },
          '75%': { borderRadius: '70% 30% 60% 40% / 30% 60% 40% 70%' },
        },
        borderSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(59,130,246,0.08) 0%, transparent 50%)',
        'gradient-radial': 'radial-gradient(ellipse at top, rgba(59,130,246,0.15) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(59, 130, 246, 0.15)',
        'glow-accent': '0 0 40px rgba(168, 85, 247, 0.15)',
        'glow-success': '0 0 20px rgba(34, 197, 94, 0.4)',
      },
    },
  },
  plugins: [],
}
