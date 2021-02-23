import useRequireAuth from 'hooks/useRequireAuth'

const Users = () => {
  useRequireAuth()

  return <h1>Users</h1>
}

export default Users
