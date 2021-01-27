// Libs
import { ReactElement } from 'react'
import Document, { Head, Html, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import NextHead from 'next/head'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps (ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({ enhanceApp: App => props => sheet.collectStyles(<App {...props} />) })

      const initialProps = await Document?.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            <NextHead>
              <title>Next Meetup</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </NextHead>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render (): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
