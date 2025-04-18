/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0F172A',
          light: '#1E293B'
        },
        primary: {
          DEFAULT: '#38BDF8',
          dark: '#0284C7',
          light: '#7DD3FC'
        },
        secondary: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#34D399'
        },
        accent: '#F472B6',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      keyframes: {
        binary: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        binary: 'binary 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};