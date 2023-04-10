import { ThemeConfig, Theme } from '@react-monorepo/ui-theme';
import { lightTheme } from './light.theme';

export const getConfig = (theme: Theme): ThemeConfig => {
  switch (theme) {
    case 'light':
      return lightTheme;

    default:
      return lightTheme;
  }
};
