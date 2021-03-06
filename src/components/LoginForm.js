import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useAuth } from 'hooks/useAuth'
import styles from 'components/LoginForm.module.scss'

const LoginForm = () => {
  const { register, errors, handleSubmit } = useForm()
  const auth = useAuth()
  const router = useRouter()

  const onSubmit = async (data) => {
    await auth.signIn(data)
    router.push('/profile')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          name="email"
          ref={register({
            required: 'Please enter your email',
            pattern: {
              value: emailRegex,
              message: 'Not a valid email'
            }
          })}
        />
        {errors.email && (
          <div className={styles.errors}>{errors.email.message}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          ref={register({
            required: 'Please enter a password',
            minLength: {
              value: 6,
              message: 'Should have at least 6 characters'
            }
          })}
        />
        {errors.password && (
          <div className={styles.errors}>{errors.password.message}</div>
        )}
      </div>
      <div>
        <span>
          <button type="submit">Log In</button>
        </span>
      </div>
    </form>
  )
}

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

export default LoginForm
