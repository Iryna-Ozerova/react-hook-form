import './App.scss'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Checkbox } from './Checkbox'

interface IForm {
email: string
  message: string
  isImportant: boolean
}

function App() {
  const { register, handleSubmit, formState, control } = useForm<IForm>({
      mode: 'onChange',
  })

  const emailError = formState.errors['email']?.message
  const messageError = formState.errors['message']?.message

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data)
  }

  return (
    <>
      <h1>Feedback form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          autoComplete="off"
          type="text"
          placeholder="Enter e-mail:"
          {...register('email', {
            required: 'This field is required',
            pattern: {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: 'Invalid email format',
},
          })}
        />
        {emailError && (
          <p
            style={{
              color: 'tomato',
              margin: '2px auto 0',
              textAlign: 'left',
              fontSize: '14px'
            }}
          >
            {emailError}
            </p>
          )}
        <textarea placeholder="Enter message:"
          {...register('message', {
            required: 'This field is required',
          })}
        ></textarea>
      
         {messageError && (
          <p
            style={{
              color: 'tomato',
              margin: '2px auto 0',
              textAlign: 'left',
              fontSize: '14px'
            }}
          >
            {messageError}
            </p>
        )}

        <Checkbox control={control}/>
        
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default App