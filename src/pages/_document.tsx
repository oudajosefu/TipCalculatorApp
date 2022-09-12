import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='bg-grayish-cyan-200 dark:bg-gray-600'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;