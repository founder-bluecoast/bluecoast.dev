module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'bc-ink': '#0A0A0A',
        'bc-surface': '#101214',
        'bc-border': '#22262A',
        'bc-foam': '#EDEDED',
        'bc-muted': '#B4B8BF',
        'bc-accent': '#E1C27D',
        'bc-accent-700': '#C6A55F',
        'bc-accent-800': '#A98840'
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
