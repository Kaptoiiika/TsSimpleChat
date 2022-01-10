import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Chanels from "../Component/Chanels/Chanels"
import Members from "../Component/Members/Members"
import Mesenger from "../Component/Mesenger/Mesenger"
import NavBar from "../Component/NavBar/NavBar"
import { AuthContext } from "../context/AuthContext"
import { ServerContext } from "../context/ServerContext"
import { UserContext } from "../context/UserContext"
import { useChanel } from "../hooks/chanel.hook"
import { useServer } from "../hooks/server.hook"
import { useUser } from "../hooks/user.hook"
import HomePage from "./Home"

function ApplicationPage() {
  const auth = useContext(AuthContext)
  const { getData, users } = useUser()
  const { setServerData, serverId, serverName, chanelsId, membersId } =
    useServer()

  const { setChanel, sendMessage, chanelId, chanelName, messages } = useChanel()

  useEffect(() => {
    getData(auth.userId || " ")
  }, [auth.userId])

  const [server, setServer] = useState(0)

  return (
    <UserContext.Provider value={{ getData, users }}>
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
            {server ? (
              <>
                <Chanels />
                <Mesenger />
                <Members />
              </>
            ) : (
              <HomePage />
            )}
          </div>
      </ServerContext.Provider>
    </UserContext.Provider>
  )
}

export default ApplicationPage
