import React from 'react';
import Head from 'next/head';

import 'assets/styles/index.css';
import 'assets/styles/docs.scss';
import 'material-design-icons/iconfont/material-icons.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link rel="shortcut icon" href={require('assets/img/favicon.ico')} />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={require('assets/img/apple-icon.png')}
        />
        {/* Canonical SEO */}
        {/*  Social tags      */}
        <meta
          name="keywords"
          content="free template, freebie, free, kit, starter kit, tailwind, tailwindcss, react, angular, html, javascript, js, vuejs, vue, vuejs kit, vue kit, react kit, html kit, javascript kit, angular kit"
        />
        <meta
          name="description"
          content="A beautiful extension for TailwindCSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue, and Angular."
        />
        {/* Schema.org markup for Google+ */}
        <meta
          itemProp="name"
          content="Tailwind Starter Kit by Creative Tim | Free & Open Source Design System"
        />
        <meta
          itemProp="description"
          content="A beautiful extension for TailwindCSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue, and Angular."
        />
        <meta
          itemProp="image"
          content="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/creative-tim/opt_tsp_tailwindcss_thumbnail.jpg"
        />
        {/* Twitter Card data */}
        <meta name="twitter:card" content="product" />
        <meta name="twitter:site" content="@creativetim" />
        <meta
          name="twitter:title"
          content="Tailwind Starter Kit by Creative Tim | Free & Open Source Design System"
        />
        <meta
          name="twitter:description"
          content="A beautiful extension for TailwindCSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue, and Angular."
        />
        <meta name="twitter:creator" content="@creativetim" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/creative-tim/opt_tsp_tailwindcss_thumbnail.jpg"
        />
        <meta
          name="twitter:data1"
          content="Tailwind Starter Kit by Creative Tim | Free & Open Source Design System"
        />
        <meta name="twitter:label1" content="Product Type" />
        <meta name="twitter:data2" content="Free" />
        <meta name="twitter:label2" content="Price" />
        {/* Open Graph data */}
        <meta property="fb:app_id" content="655968634437471" />
        <meta
          property="og:title"
          content="Tailwind Starter Kit by Creative Tim | Free & Open Source Design System"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/creative-tim/opt_tsp_tailwindcss_thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="A beautiful extension for TailwindCSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue, and Angular."
        />
        <meta property="og:site_name" content="Creative Tim" />
        <title>Tailwind Starter Kit by Creative Tim</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
