import { create, SheetsRegistry } from 'jss'
import { createGenerateClassName, createMuiTheme, jssPreset } from '@material-ui/core/styles'
import lightTheme from './lightTheme'

const theme = createMuiTheme(lightTheme)

// Configure JSS
const jss = create({
  insertionPoint: 'insertion-point-jss',
  plugins: [...jssPreset().plugins]
})

const createPageContext = () => ({
  jss,
  theme,
  // This is needed in order to deduplicate the injection of CSS in the page.
  sheetsManager: new Map(),
  // This is needed in order to inject the critical CSS.
  sheetsRegistry: new SheetsRegistry(),
  // The standard class name generator.
  generateClassName: createGenerateClassName({
    productionPrefix: 'j' // Reduce the bandwidth usage.
  })
})

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
