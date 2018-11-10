/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
import React from 'react'
import App, { Container } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../src/getPageContext'
import Page from '../components/Page'
import { createGlobalStyle } from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
html { font-family: 'Lato', helvetica, arial, sans-serif;}
:root {font-size: 16px;}
`

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    this.pageContext = getPageContext()
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  pageContext = null

  componentWillMount() {
    this.pageContext = this.props.pageContext || getPageContext()

    // Inject the insertion-point-jss
    if (process.browser) {
      global.__INSERTION_POINT__ = true
      const styleNode = document.createComment('insertion-point-jss')
      document.head.insertBefore(styleNode, document.head.firstChild)
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(`#jss-server-side`)
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { pageContext } = this
    const { Component, pageProps } = this.props
    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          jss={pageContext.jss}
          registry={pageContext.sheetsRegistry}
          generateClassName={pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider theme={pageContext.theme}>
            <MuiThemeProvider theme={pageContext.theme} sheetsManager={pageContext.sheetsManager}>
              <CssBaseline />
              <GlobalStyle />
              {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
              <Page>
                <Component pageContext={pageContext} {...pageProps} />
              </Page>
            </MuiThemeProvider>
          </ThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default MyApp
