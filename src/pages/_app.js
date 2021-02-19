/** @jsxRuntime classic */
/** @jsx jsx */

import { ThemeProvider, jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import Nav from 'components/Nav'
// Import Global and Theme styles
import 'styles/global.scss'
import theme from 'theme'
import styles from 'pages/_app.module.scss'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <div className={styles.app}>
      <Nav />
      <div className={styles.page}>
        <Component {...pageProps} />
      </div>
    </div>
  </ThemeProvider>
)

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default App
