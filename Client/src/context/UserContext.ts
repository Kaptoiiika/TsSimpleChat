import { createContext } from "react"

export const UserContext = createContext({
  getData: (userId: string) => {},
  name: null,
  userId: null,
  status: null,
  contact: null,
  subscribers: [''],
})
