import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to application-1!</title>
      </Head>
      Last version: <br />
      Last version: <br />
      Last version: <br />
      Last version: <br />
    </>
  );
}

export default CustomApp;
