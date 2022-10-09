import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>About - My Clothing Store</title>
          <meta name='description' content='The story behind My Clothing Store!' />
          <meta property='og:title' content='About - My Clothing Store' />
          <meta property='og:description' content='The story behind My Clothing Store!' />
          <meta property='og:url' content='https://myclothingstore.com/about' />
          <meta property='og:type' content='website' />
          <link rel='icon' href='/favicon.ico' />
          <h1>ボイラープレート</h1>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
