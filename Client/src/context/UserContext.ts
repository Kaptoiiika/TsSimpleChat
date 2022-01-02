import { createContext } from "react"

export const UserContext = createContext({
  name: null,
  userId: null,
  getData: (userId:string) => {},
  status: null,
  contact: null,
})
