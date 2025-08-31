/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light': '#FAFBFC',
        'custom-light-secondary': '#F8F9FA',
        'custom-light-tertiary': '#F1F3F4',
        'custom-accent': '#6366F1',
        'custom-accent-secondary': '#8B5CF6',
        'custom-text': '#1F2937',
        'custom-text-secondary': '#6B7280',
        'custom-text-muted': '#9CA3AF',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

