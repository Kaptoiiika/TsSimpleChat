import "./Servers.css"
import { Button } from "@material-ui/core"
import { GiHouse, GiBackboneShell, GiBull } from "react-icons/gi"
import { BiPlus, BiCaretDown, BiCaretUp } from "react-icons/bi"
import { useState } from "react"
import { serverList } from "../../Data/Servers"
import Chanels from "../Chanels/Chanels"
import Members from "../Members/Members"
import usersList from "../../Data/Users"
import { member } from "../../types/Servers"

function Servers() {
  const iconColor = "#3ba55d"
  const [currentServer, setCurrentServer] = useState(0)

  const users = serverList[currentServer].members.map((user: member) => {
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
  const chanels = serverList[currentServer].chanels
  const serverName = serverList[currentServer].name

  function home() {
    console.log("home")
  }
  function addServer() {
    console.log("addServer")
  }
  function toChangeServer(serverId: number) {
    setCurrentServer(serverId)
  }

  return (
    <>
      <div className="Servers">
        <Button
          className="homeButton serverIcon serversButton"
          onClick={() => {
            home()
          }}
        >
          <GiHouse color={iconColor} className="serverIcon" size="50px" />
        </Button>

        <BiCaretUp color={iconColor} />
        <Button
          className="toChangeServer serversButton"
          onClick={() => toChangeServer(0)}
        >
          <GiBackboneShell
            color={iconColor}
            className="serverIcon"
            size="50px"
          />
        </Button>

        <Button
          className="toChangeServer serversButton"
          onClick={() => toChangeServer(1)}
        >
          <GiBull color={iconColor} className="serverIcon" size="50px" />
        </Button>

        <BiCaretDown color={iconColor} />
        <Button
          className="addServer serverIcon serversButton"
          onClick={() => {
            addServer()
          }}
        >
          <BiPlus color={iconColor} className="serverIcon" size="50px" />
        </Button>
      </div>

      <Chanels chanels={chanels} serverName={serverName} />
      <Members users={users} />
    </>
  )
}

export default Servers
