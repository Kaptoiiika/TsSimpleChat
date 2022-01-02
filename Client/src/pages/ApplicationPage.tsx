import { useContext, useEffect, useState } from "react"
import Chanels from "../Component/Chanels/Chanels"
import Members from "../Component/Members/Members"
import NavBar from "../Component/NavBar/NavBar"
import { AuthContext } from "../context/AuthContext"
import { UserContext } from "../context/UserContext"
import { serverList } from "../data/Servers"
import usersList from "../data/Users"
import { useUser } from "../hooks/user.hook"
import { member } from "../types/Servers"
import CreateServer from "./CreateServer"
import HomePage from "./Home"

function ApplicationPage() {
  const auth = useContext(AuthContext)
  const { getData, name, userId, status, contact } = useUser()
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
    if (server === -2)
      return (
        <div className="App">
          <NavBar setServer={setServer} />
          <CreateServer />
        </div>
      )
  }

  const chanels = serverList[server].chanels
  const serverName = serverList[server].name
  const serverId = serverList[server].id

  const users = serverList[server].members.map((user: member) => {
    return {
      id: usersList[user.id].id,
      name: usersList[user.id].name,
      icon: usersList[user.id].icon,
      status: usersList[user.id].status,
      contact: usersList[user.id].contact,

      permison: user.permison,
      color: user.color,
    }
  })

  return (
    <UserContext.Provider value={{ getData, name, userId, status, contact }}>
      <div className="App">
        <NavBar setServer={setServer} />
        <Chanels
          chanels={chanels}
          serverId={serverId}
          serverName={serverName}
        />
        <Members users={users} />
      </div>
    </UserContext.Provider>
  )
}

export default ApplicationPage
