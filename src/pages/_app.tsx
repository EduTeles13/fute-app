import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Providers } from '@/providers';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers session={pageProps.session}>
      <Head>
        <title>Fute</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="180x180" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
}
