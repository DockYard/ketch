import Link from 'next/link'
import RegisterForm from 'components/RegisterForm'
import styles from 'pages/register.module.scss'

const Register = () => (
  <div className={styles.register}>
    <h1>Sign Up</h1>
    <p>
      Already have an account?
      <Link href="/login">Log in</Link>
    </p>
    <div className={styles.registerForm}>
      <RegisterForm />
    </div>
  </div>
)

export default Register
