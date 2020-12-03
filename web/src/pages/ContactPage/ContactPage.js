import MainLayout from 'src/layouts/MainLayout'

import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  FormError
} from '@redwoodjs/forms'

import {
  useMutation,
  useFlash,
  Flash
} from '@redwoodjs/web'

import {useForm} from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(vals: $input) {
      id
    }
  }
`


const ContactPage = () => {

  const formMethods = useForm({mode: 'onBlur'})

  const {addMessage} = useFlash()

  const [create, {loading, error}] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      addMessage("Thanks for signing up", {
        style: {
          backgroundColor: 'green', padding: '1rem', color: 'white'
        }
      })
      formMethods.reset()
    }
  })

  const onSubmit = (data) => {
    create({variables: {input: data}})
    console.log(data)
  }
  console.log(error)

  return (
    <MainLayout>
      <Flash timeout={3000}></Flash>
      <h1 class="font-bold text-2xl">Contact Page</h1>
      <div class="flex justify-center">
        <Form class="w-1/3" onSubmit={onSubmit}  error={error} formMethods={formMethods}>
          <FormError error={error}
            wrapperStyle={{color: 'red', border: '1px solid red', padding: '1rem', borderRadius: '10px'}}
          ></FormError>
          <div class="w-full flex flex-wrap">
            <label class="w-1/3" htmlFor="name" name="name">Name: </label>
            <TextField class="w-2/3 border border-gray-700 rounded-lg pl-3" name="name" validation={{required: true}}></TextField>
            <div className="w-full flex justify-end">
              <FieldError class="w-2/3 text-red-500" name="name"></FieldError>
            </div>
          </div>
          <div class="w-full flex flex-wrap">
            <label class="w-1/3" htmlFor="email" name="email">Email: </label>
            <TextField class="w-2/3 border border-gray-700 rounded-lg pl-3" name="email" validation={{required: true}}></TextField>
            <div className="w-full flex justify-end">
              <FieldError class="w-2/3 text-red-500" name="email"></FieldError>
            </div>
          </div>
          <div class="w-full flex flex-wrap">
            <label class="w-1/3" htmlFor="message" name="message">Message: </label>
            <TextAreaField class="w-2/3 border border-gray-700 rounded-lg pl-3" name="message" validation={{required: true}}></TextAreaField>
            <div className="w-full flex justify-end">
              <FieldError class="w-2/3 text-red-500" name="message"></FieldError>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Submit class="w-2/3 border border-gray-700 rounded-lg" disabled={loading}>Submit</Submit>
          </div>
        </Form>
      </div>
    </MainLayout>
  )
}

export default ContactPage
