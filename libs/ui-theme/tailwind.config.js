const path = require('path');
const tokens = require(path.join(__dirname, './src/tokens.json'));

module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'current',
      black: 'black',
      white: 'white',
      'primary-1': 'var(--color-primary-1)',
      'primary-2': 'var(--color-primary-2)',
      'secondary-1': 'var(--color-secondary-1)',
      'secondary-2': 'var(--color-secondary-2)',
      'gray-1': '#F7F7F7',
      'gray-2': '#E9E9E9',
      'gray-3': '#B2B2B2',
      'gray-4': '#767676',
      'gray-5': '#666666',
      'gray-6': '#333333',
    },
    screens: {
      md: tokens.screens.md,
      lg: tokens.screens.lg,
      xl: tokens.screens.xl,
    },
  },
  plugins: [],
};
