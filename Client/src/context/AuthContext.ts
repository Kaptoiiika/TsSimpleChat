import { createContext } from "react"

export const AuthContext = createContext({
  token: '',
  userId: '',
  login: (jwtToken: any, id: any) => {},
  logout: () => {},
  isAuth: false,
})
