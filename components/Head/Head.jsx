import Head from 'next/head';
import React from 'react';

function SEO() {
  return (
    <Head>
      <title>Favorite Tabs</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta
        name="description"
        content="This small and simple project was made to reduce the number of tabs open in the browser, so the OpenSaveURLs helps to save the urls that are in use to consult another time."
      />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}

export { SEO };
