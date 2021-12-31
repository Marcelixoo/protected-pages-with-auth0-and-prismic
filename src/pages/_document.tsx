import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

const fontRobotoUrl = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;700;900&display=swap";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href={fontRobotoUrl} rel="stylesheet" />

          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}