import React from 'react';
import { IThemeProvider, ThemeConfig, ThemeContextState } from './types';

const ThemeContext = React.createContext<ThemeContextState>(
  {} as ThemeContextState
);

export const getBrandStyleConfig = (config: ThemeConfig) => ({
  '--font-primary': config.font.primary.name,
  '--font-secondary': config.font.secondary.name,
  '--color-primary-1': config.colors['color-primary-1'] || 'black',
  '--color-primary-2': config.colors['color-primary-2'] || 'black',
  '--color-secondary-1': config.colors['color-secondary-1'] || 'black',
  '--color-secondary-2': config.colors['color-secondary-2'] || 'black',
});

const ThemeProvider: React.FC<IThemeProvider> = ({ children, config }) => {
  const context = React.useMemo<ThemeContextState>(() => ({}), []);

  return (
    <ThemeContext.Provider value={context}>
      <main
        // @ts-expect-error
        style={getBrandStyleConfig(config)}
        data-theme={config.theme}
      >
        <>
          {/* <link rel="stylesheet" href={config.font.primary.url} /> */}
          {/* <link rel="stylesheet" href={config.font.secondary.url} /> */}
        </>

        {children}
      </main>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
