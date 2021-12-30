import { createContext } from "react"

export const UserContext = createContext({
  userId: null,
  name:null,
  icon: null,
  status:null,
  connectionStatus:null,
})
