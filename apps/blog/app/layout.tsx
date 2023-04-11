import { Layout } from '@react-monorepo/ui-module-layout';
import { ThemeProvider } from '@react-monorepo/ui-theme';
import { getConfig } from '../config/theme';
import './styles.generated.css';
import { getRouteConfig } from '../config/route';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeConfig = getConfig('light');
  const routeConfig = getRouteConfig();

  return (
    <html>
      <head>
        <link rel="stylesheet" href={themeConfig.font.secondary.url} />
        <link rel="stylesheet" href={themeConfig.font.primary.url} />
      </head>
      <body>
        <ThemeProvider config={themeConfig}>
          <Layout menuItems={routeConfig.menuItems}>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
