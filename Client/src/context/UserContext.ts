import { createContext } from "react"

export const UserContext = createContext({
  getData: (userId: string) => {},
  users: {},
})
