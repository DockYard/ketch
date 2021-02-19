/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import useRequireAuth from 'hooks/useRequireAuth'

const Lists = () => {
  useRequireAuth()

  return <h1>Lists</h1>
}

export default Lists
