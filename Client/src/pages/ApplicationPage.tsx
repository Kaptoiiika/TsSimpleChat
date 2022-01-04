import { useContext, useEffect, useState } from "react"
import Chanels from "../Component/Chanels/Chanels"
import Members from "../Component/Members/Members"
import NavBar from "../Component/NavBar/NavBar"
import { AuthContext } from "../context/AuthContext"
import { ServerContext } from "../context/ServerContext"
import { UserContext } from "../context/UserContext"
import { useServer } from "../hooks/server.hook"
import { useUser } from "../hooks/user.hook"
import HomePage from "./Home"

function ApplicationPage() {
  const auth = useContext(AuthContext)
  const { getData, name, userId, status, contact, subscribers } = useUser()
  const { setServerData, serverId, serverName, chanelsId, membersId } =
    useServer()

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
        <div className="App">
          <NavBar setServer={setServer} />
          <Chanels />
          <Members />
        </div>
      </ServerContext.Provider>
    </UserContext.Provider>
  )
}

export default ApplicationPage
