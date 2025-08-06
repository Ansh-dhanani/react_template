/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'apple-garamond': ['Apple Garamond', 'serif'],
        'merapro': ['MeraPro', 'sans-serif'],
        'boone': ['Boone', 'sans-serif'],
        'default-lingo': ['Default Lingo', 'sans-serif'],
        'minecraft': ['Minecraft', 'monospace'],
        'montblanc': ['Montblanc', 'sans-serif'],
        'palmore': ['Palmore', 'sans-serif'],
        'tan-kulture': ['TAN Kulture', 'serif'],
        'gridular': ['Gridular', 'sans-serif'],
        'telegraf': ['Telegraf', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
