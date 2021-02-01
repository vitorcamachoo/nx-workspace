import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to application-1!</title>
      </Head>
      Branch: <i>{process.env.NEXT_PUBLIC_BRANCH}</i> <br />
      Commit: 222<i>{process.env.NEXT_PUBLIC_COMMIT}</i>
    </>
  );
}

export default CustomApp;
