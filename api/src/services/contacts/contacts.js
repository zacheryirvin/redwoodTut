import { db } from 'src/lib/db'
import {UserInputError} from '@redwoodjs/api'

const validate = (input) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create new Contact", {
      messages: {
        email: ['is not formated lke an email address',]
      }
    })
  }
}

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({vals}) => {
  validate(vals)
  return db.contact.create({data: vals})
}
