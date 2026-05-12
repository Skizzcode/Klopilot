import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0f172a',
          700: '#0e4c91',
          500: '#0ea5e9',
          300: '#7dd3fc'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(14, 165, 233, 0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.08), transparent 24%)'
      }
    }
  },
  plugins: []
}

export default config
