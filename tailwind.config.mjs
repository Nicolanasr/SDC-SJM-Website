/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cedar: {
          50: '#f0f7f3',
          100: '#d8ecdf',
          200: '#b5dac4',
          300: '#87c1a2',
          400: '#58a280',
          500: '#398565',
          600: '#2a694f',
          700: '#235440',
          800: '#1b4332', // Core Cedar Green
          900: '#143326',
          950: '#0c1f18',
        },
        sand: {
          50: '#faf7f2', // Warm paper canvas
          100: '#f4efe6',
          200: '#e8dfd0',
          300: '#d9ccb5',
          400: '#beaa8a',
          500: '#a38d6b',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          400: '#fbbf24',
          500: '#d97706', // Campfire / Scarf gold
          600: '#b45309',
        },
        navy: {
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'tactile': '0 2px 0 0 rgba(27, 67, 50, 0.08), 0 10px 25px -5px rgba(27, 67, 50, 0.06)',
        'tactile-hover': '0 4px 0 0 rgba(27, 67, 50, 0.12), 0 20px 30px -10px rgba(27, 67, 50, 0.12)',
        'button-tactile': '0 3px 0 0 #143326',
        'button-gold': '0 3px 0 0 #b45309',
      }
    },
  },
  plugins: [],
};
