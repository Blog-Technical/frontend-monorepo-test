import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.generated.css';
import { ThemeProvider } from '@react-monorepo/ui-theme';
import { getConfig } from '../config/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  const themeConfig = getConfig('light');

  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <main className="app">
        <ThemeProvider config={themeConfig}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
