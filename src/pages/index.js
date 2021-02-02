/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const Home = ({ content }) => (
  <div
    sx={{
      height: `calc(100vh - 60px)`
    }}>
    <div
      sx={{
        variant: 'containers.page'
      }}>
      <h1
        sx={{
          color: 'secondary',
          fontSize: 6,
          my: 2
        }}>
        {content.headline}
      </h1>
      <h3
        sx={{
          fontWeight: 200,
          fontStyle: 'italic',
          color: 'gray'
        }}>
        {content.timestamp}
      </h3>
    </div>
  </div>
)

const getServerSideProps = async (/* context */) => {
  const res = await fetch(`${process.env.API_URL}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  const { content } = data

  return {
    props: { content }
  }
}

Home.propTypes = {
  content: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  })
}

export default Home
export { getServerSideProps }
