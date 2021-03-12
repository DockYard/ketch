import { useForm } from 'react-hook-form'

const ListForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name of List: {`   `}</label>
        <input
          id="name"
          type="text"
          name="name"
          ref={register({
            required: 'Please name your list'
          })}
        />
      </div>
      <div>
        <span>
          <button type="submit">Save</button>
        </span>
      </div>
    </form>
  )
}

export default ListForm
