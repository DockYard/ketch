/** @jsxRuntime classic */
/** @jsx jsx */

import { ThemeProvider, jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import Nav from '../components/nav'
import theme from '../../theme'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  </ThemeProvider>
)

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default App
