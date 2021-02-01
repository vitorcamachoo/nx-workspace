import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';
//
//
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to application-1!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to application-1!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      Branch: <i>{process.env.NEXT_PUBLIC_BRANCH}</i> <br />
      Commit: <i>{process.env.NEXT_PUBLIC_COMMIT}</i>
    </>
  );
}

export default CustomApp;
