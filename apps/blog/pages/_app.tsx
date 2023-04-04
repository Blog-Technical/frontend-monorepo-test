import { AppProps } from 'next/app';
import Head from 'next/head';
import { UIAuthentication } from '@react-monorepo/ui-module-authentication';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <main className="app">
        <UIAuthentication />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
