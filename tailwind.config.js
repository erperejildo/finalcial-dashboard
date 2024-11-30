module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // NOTE: force light mode since we don't have a specifc dark theme
  darkMode: 'selector',
};
