const tailwindBase = require('../../libs/ui-theme/tailwind.config');

module.exports = {
  ...tailwindBase,
  content: ['./app/**/*.{js,ts,jsx,tsx}', '../../libs/**/*.{js,ts,jsx,tsx}'],
};
