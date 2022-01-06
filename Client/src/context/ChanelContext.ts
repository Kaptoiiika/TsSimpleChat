import { createContext } from "react"

export const ChanelContext = createContext({
  setChanel: (id: string) => {},
  sendMessage: (id: string) => {},
  chanelId: null,
  chanelName: null,
  messages: [null],
})
