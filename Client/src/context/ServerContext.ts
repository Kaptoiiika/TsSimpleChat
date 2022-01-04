import { createContext } from "react"

export const ServerContext = createContext({
  setServerData: (serverId: string) => {},
  serverId: null,
  serverName: null,
  chanelsId: [null],
  membersId: [null],
})
