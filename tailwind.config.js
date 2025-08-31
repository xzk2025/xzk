/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-light': '#E8F4FD',
        'sky-lighter': '#F0F8FF',
        'sky-soft': '#E1F2FF',
        'sky-accent': '#3B82F6',
        'sky-accent-secondary': '#1E40AF',
        'sky-text': '#1E293B',
        'sky-text-secondary': '#475569',
        'sky-text-muted': '#64748B',
        'sky-border': '#CBD5E1',
        'sky-border-light': '#E2E8F0',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

