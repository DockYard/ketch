import { useAuth } from 'hooks/useAuth'
import Link from 'next/link'
import styles from 'pages/profile.module.scss'

const Profile = () => {
  const auth = useAuth()

  if (!auth.user)
    return (
      <div className={styles.profile}>
        <h1>Profile</h1>
        <p>You are not loggeed in.</p>
        <p>
          Please <Link href="/login">Log in</Link> or
          <Link href="/register"> Register</Link>
        </p>
      </div>
    )

  return (
    <div className={styles.profile}>
      <h1>Profile</h1>
      <h2>{`Welcome ${auth.user.name}`}</h2>
      <p>{`You are logged in with ${auth.user.email}`}.</p>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Profile
