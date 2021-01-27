/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const Home = ({ content }) => (
  <div>
    <div>
      <h1>{content.title}</h1>
    </div>
  </div>
)

const getStaticProps = async () => ({
  props: {
    content: {
      title: 'This is so ketch.'
    }
  }
})

Home.propTypes = {
  content: PropTypes.object.isRequired
}

export default Home
export { getStaticProps }
