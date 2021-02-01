import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

console.log(
  'process.env.NEXT_PUBLIC_CURRENT_BRANCH',
  process.env.NEXT_PUBLIC_CURRENT_BRANCH
);
console.log(
  'process.env.NEXT_PUBLIC_CURRENT_BRANCH2',
  process.env.NEXT_PUBLIC_CURRENT_BRANCH2
);

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
    </>
  );
}

export default CustomApp;
