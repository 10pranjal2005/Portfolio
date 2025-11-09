module.exports = {
  content: [
    './index.html', // Scans your HTML for classes to use
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        panel: '#1a120b',
        text: '#ffffff',
        muted: '#cfcfcf',
        brand: '#d4a017',
        'brand-dark': '#b8860b',
        'custom-border': '#2e1e12',
        card: '#15100b',
        ring: 'rgba(212, 160, 23, 0.3)',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      // --- ADDED THIS SECTION FOR SVG ICONS ---
      fill: (theme) => ({
        text: theme('colors.text'),
        muted: theme('colors.muted'),
        brand: theme('colors.brand'),
      }),
      stroke: (theme) => ({
        text: theme('colors.text'),
        muted: theme('colors.muted'),
        brand: theme('colors.brand'),
      }),
      // --- END OF ADDED SECTION ---
    },
  },
  plugins: [],
}