/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fleet: {
          black: '#171717',        // Industrial Black (dark surfaces, navbar, footer)
          charcoal: '#282321',     // Dark Charcoal (card backgrounds, alternate dark panels)
          yellow: '#FFC000',       // Safety Yellow (highlights, stars, badge accents)
          orange: '#F47721',       // Construction Orange (primary CTAs, search button)
          cream: '#F4E8D8',        // Warm Cream (light contrast sections)
          grey: '#B9B9B9',         // Supporting Steel Grey
          light: '#FFFFFF',        // Light Neutral
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
