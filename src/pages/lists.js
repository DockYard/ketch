import useRequireAuth from 'hooks/useRequireAuth'
import ListForm from 'components/ListForm'

const Lists = () => {
  useRequireAuth()

  return (
    <div>
      <h1>Lists</h1>
      <span></span>
      <ListForm />
    </div>
  )
}

export default Lists
