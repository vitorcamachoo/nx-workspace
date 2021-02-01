import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
console.log('te');

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome 22to application-1!</title>
      </Head>
      Last version:22 <br />
      Last version: <br />
    </>
  );
}

export default CustomApp;
