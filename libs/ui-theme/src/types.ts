import { ReactNode } from 'react';

export type TailwindProps = {};

export type ThemeContextState = {};
export interface IThemeProvider {
  children: ReactNode;
  config: ThemeConfig;
}

export type Theme = 'light' | 'dark';
export type ThemeConfig = {
  theme: Theme;
  font: {
    primary: { name: string; url: string };
    secondary: { name: string; url: string };
  };
  colors: {
    'color-primary-1'?: string;
    'color-primary-2'?: string;
    'color-secondary-1'?: string;
    'color-secondary-2'?: string;
  };
};
