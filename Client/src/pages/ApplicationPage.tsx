import { useContext, useEffect, useState } from "react"
import Chanels from "../Component/Chanels/Chanels"
import Members from "../Component/Members/Members"
import Mesenger from "../Component/Mesenger/Mesenger"
import NavBar from "../Component/NavBar/NavBar"
import { AuthContext } from "../context/AuthContext"
import { ChanelContext } from "../context/ChanelContext"
import { ServerContext } from "../context/ServerContext"
import { UserContext } from "../context/UserContext"
import { useChanel } from "../hooks/chanel.hook"
import { useServer } from "../hooks/server.hook"
import { useUser } from "../hooks/user.hook"
import HomePage from "./Home"

function ApplicationPage() {
  const auth = useContext(AuthContext)
  const { getData, name, userId, status, contact, subscribers } = useUser()
  const { setServerData, serverId, serverName, chanelsId, membersId } =
    useServer()
  const { setChanel, sendMessage, chanelId, chanelName, messages } = useChanel()
  useEffect(() => {
    getData(auth.userId || " ")
  }, [auth.userId])
  const [server, setServer] = useState(0)

  if (server < 0) {
    if (server === -1)
      return (
        <div className="App">
          <NavBar setServer={setServer} />
          <HomePage />
        </div>
      )
  }

  return (
    <UserContext.Provider
      value={{ getData, name, userId, status, contact, subscribers }}
    >
      <ServerContext.Provider
        value={{
          setServerData,
          serverId,
          serverName,
          chanelsId,
          membersId,
        }}
      >
        <ChanelContext.Provider
          value={{ setChanel, sendMessage, chanelId, chanelName, messages }}
        >
          <div className="App">
            <NavBar setServer={setServer} />
            <Chanels />
            <Mesenger />
            <Members />
          </div>
        </ChanelContext.Provider>
      </ServerContext.Provider>
    </UserContext.Provider>
  )
}

export default ApplicationPage
