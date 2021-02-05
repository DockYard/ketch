/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
  <header
    sx={{
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary'
    }}>
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%'
      }}>
      <Link href="/">
        <a
          sx={{
            variant: 'links.activeNav'
          }}>
          Home
        </a>
      </Link>

      <Link href="/about">
        <a
          sx={{
            variant: 'links.nav'
          }}>
          About
        </a>
      </Link>

      <Link href="/lists">
        <a
          sx={{
            variant: 'links.nav'
          }}>
          Lists
        </a>
      </Link>

      <Link href="/users">
        <a
          sx={{
            variant: 'links.nav'
          }}>
          Users
        </a>
      </Link>

      <Link href="/profile">
        <a
          sx={{
            variant: 'links.nav'
          }}>
          Profile
        </a>
      </Link>
    </nav>
  </header>
)

export default Nav
