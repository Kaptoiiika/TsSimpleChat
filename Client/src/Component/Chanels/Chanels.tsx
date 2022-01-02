import { useContext, useState } from "react"
import { chanel } from "../../types/Servers"
import Mesenger from "../Mesenger/Mesenger"
import { Button } from "@mui/material"

import "./Chanels.css"
import { UserContext } from "../../context/UserContext"

type Props = {
  chanels: chanel[]
  serverName: string
  serverId: number
}

function Chanels(props: Props) {
  const { chanels, serverName, serverId } = props
  const { name, status } = useContext(UserContext)
  const [currentChanel, setCurrentChanel] = useState(0)

  const chanelName = chanels[currentChanel].name
  const chanelId = chanels[currentChanel].id

  function changeChanel(id: number) {
    setCurrentChanel(id)
  }

  return (
    <div className="Main">
      <div className="Chanels">
        <h3 className="header Chanels-header">{serverName}</h3>

        <div className="chanels-list">
          {chanels.map((chanel, index) => {
            return (
              <Button
                id={`chanelID:${chanel.id}`}
                onClick={() => {
                  changeChanel(chanel.id)
                }}
                className={`chanels-item`}
                key={chanel.id}
              >
                {chanel.name}
              </Button>
            )
          })}
        </div>

        <div className="chanels-fotter">
          <div className="chanels-fotter-user">
            <div className="chanels-fotter-icon">
              <img
                src="https://cdn.discordapp.com/avatars/782147867380285442/4acae783a7dba751a54c6306942dd0d7.webp?size=80"
                alt=""
              />
            </div>
            <div className="chanels-fotter-userData">
              <p className="chanels-fotter-userName">{name}</p>
              <p className="chanels-fotter-status">{status}</p>
            </div>
          </div>
        </div>
      </div>
      <Mesenger
        messages={chanels[currentChanel].messages}
        chanelName={chanelName}
        chanelId={chanelId}
        serverId={serverId}
      />
    </div>
  )
}

export default Chanels
