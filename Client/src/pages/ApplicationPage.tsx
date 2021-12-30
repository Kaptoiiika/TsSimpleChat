import { useState } from "react"
import Chanels from "../Component/Chanels/Chanels"
import Members from "../Component/Members/Members"
import NavBar from "../Component/NavBar/NavBar"
import { serverList } from "../data/Servers"
import usersList from "../data/Users"
import { member } from "../types/Servers"
import CreateServer from "./CreateServer"
import HomePage from "./Home"

function ApplicationPage() {
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
    <div className="App">
      <NavBar setServer={setServer} />
      <Chanels chanels={chanels} serverId={serverId} serverName={serverName} />
      <Members users={users} />
    </div>
  )
}

export default ApplicationPage
