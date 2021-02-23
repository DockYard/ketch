import { AuthProvider } from 'hooks/useAuth'
import PropTypes from 'prop-types'
import Nav from 'components/Nav'

// Import Global and app styles
import 'styles/global.scss'
import styles from 'pages/_app.module.scss'

const App = ({ Component, pageProps }) => (
  <AuthProvider>
    <div className={styles.app}>
      <Nav />
      <div className={styles.page}>
        <Component {...pageProps} />
      </div>
    </div>
  </AuthProvider>
)

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default App
