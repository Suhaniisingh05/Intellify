// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['BodoniFLF-BoldItalic', 'serif'], // Default
        libre: ['"Libre Baskerville"', 'serif'], // Optional override
      },
    },
  },
  plugins: [],
};
