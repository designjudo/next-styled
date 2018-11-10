import React from 'react'
import PropTypes from 'prop-types'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    let pageContext = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage(Component => {
      const WrappedComponent = props => {
        sheet.collectStyles(<Component {...props} />)
        pageContext = props.pageContext
        return <Component {...props} />
      }
      WrappedComponent.propTypes = {
        pageContext: PropTypes.object.isRequired
      }
      return WrappedComponent
    })
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      pageContext,
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: pageContext.sheetsRegistry.toString()
            }}
          />
          {flush() || null}
        </React.Fragment>
      ),
      styleTags
    }
  }

  render() {
    const { pageContext } = this.props

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700" />
          {/* {this.props.styles} */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
