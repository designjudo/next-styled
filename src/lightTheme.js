import { blue, green, red, grey, orange, blueGrey } from '@material-ui/core/colors'

const lightTheme = {
  palette: {
    primary: blue,
    secondary: green,
    error: red,
    warning: orange,
    default: grey,
    blueGrey: blueGrey,
    contrastThreshold: 2,
    contrastText: '#fff',
    tonalOffset: 0.2,
    text: {
      primary: blueGrey[500],
      secondary: blueGrey[400],
      disabled: blueGrey[200],
      hint: 'rgba(0, 0, 0, 0.38)',
      divider: 'rgba(0, 0, 0, 0.12)',
      alt1: '#fff',
      alt2: grey[200]
    },
    background: {
      paper: '#fff',
      header: '#fff',
      subnav: '#fff',
      sidenav: blueGrey[600],
      content: blue[50],
      hover: blueGrey[400],
      active: blue[500],
      bg: blueGrey[50],
      border: grey[50],
      scroll: grey.A200,
      accent: blue[800],
      default: blue[50],
      inverse: 'black'
    }
  },
  typography: {
    fontFamily: 'Lato, Helvetica, Arial, sans-serif',
    fontSize: 16,
    fontWeight: 400,
    useNextVariants: true,

    h1: {
      fontSize: '6rem',
      fontWeight: 300,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      letterSpacing: -1.5,
      color: blueGrey[500]
    },
    h2: {
      fontSize: '3.75rem',
      fontWeight: 300,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      letterSpacing: -0.5,
      color: blueGrey[500]
    },
    h3: {
      fontSize: '3rem',
      fontWeight: 400,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      letterSpacing: 0,
      color: blueGrey[500]
    },
    h4: {
      fontSize: '2.125rem',
      fontWeight: 400,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      letterSpacing: 0.25,
      color: blueGrey[500]
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      letterSpacing: 0,
      color: blueGrey[500]
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 700,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      letterSpacing: 0.15,
      color: blueGrey[500]
    },

    subtitle2: {
      fontSize: '1rem',
      fontWeight: 700,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      color: blueGrey[500]
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 700,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      color: blueGrey[500]
    },

    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      color: blueGrey[500]
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      color: blueGrey[500]
    },

    button: {
      fontSize: '0.875rem',
      fontWeight: 400,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      letterSpacing: 0.2,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      letterSpacing: 0.4,
      color: blueGrey[500]
    },
    overline: {
      fontSize: '0.875rem',
      fontWeight: 700,
      fontFamily: 'Lato, Helvetica, Arial, sans-serif',
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: blueGrey[500]
    }
  }
}

export default lightTheme
