import ActiveLink from 'components/ActiveLink'
import styles from 'components/Nav.module.scss'

const Nav = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/register">Register</ActiveLink>
      <ActiveLink href="/about">About</ActiveLink>
      <ActiveLink href="/lists">Lists</ActiveLink>
      <ActiveLink href="/users">Users</ActiveLink>
      <ActiveLink href="/profile">Profile</ActiveLink>
    </nav>
  </header>
)

export default Nav
