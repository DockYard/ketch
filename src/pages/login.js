/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import Link from 'next/link'
import LoginForm from 'components/LoginForm'
import styles from 'pages/login.module.scss'

const Login = () => (
  <div className={styles.login}>
    <h1>Log In</h1>
    <p>
      Don&apos;t have an account?
      <Link href="/register">Sign Up</Link>
    </p>
    <div className={styles.loginForm}>
      <LoginForm />
    </div>
  </div>
)

export default Login
