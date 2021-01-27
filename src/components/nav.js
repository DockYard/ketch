/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
  <header>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/lists">
        <a>Lists</a>
      </Link>

      <Link href="/users">
        <a>Users</a>
      </Link>

      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </nav>
  </header>
)

export default Nav
