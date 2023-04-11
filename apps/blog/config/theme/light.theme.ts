import { ThemeConfig } from '@react-monorepo/ui-theme';

export const lightTheme: ThemeConfig = {
  theme: 'light',
  colors: {
    'color-primary-1': '#042825',
    'color-primary-2': '#0a433e',
    'color-secondary-1': '#a6c1bf',
    'color-secondary-2': '#00a99d',
  },
  font: {
    primary: {
      name: 'Space Mono',
      url: 'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    },
    secondary: {
      name: 'Rubik',
      url: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
    },
  },
};
