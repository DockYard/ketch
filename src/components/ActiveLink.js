/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './ActiveLink.module.scss'

const ActiveLink = ({ children, href }) => {
  const router = useRouter()
  const className = cx(styles.a, router.pathname === href ? styles.active : '')

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  )
}

ActiveLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default ActiveLink
