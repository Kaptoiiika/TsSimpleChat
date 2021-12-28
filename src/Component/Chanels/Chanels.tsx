import { useState } from "react"
import { chanel } from "../../types/Servers"
import Mesenger from "../Mesenger/Mesenger"

import Button from "@material-ui/core/ButtonBase"
import "./Chanels.css"

type Props = {
  chanels: chanel[]
  serverName: string
}

function Chanels(props: Props) {
  const [currentChanel, setCurrentChanel] = useState(0)
  const { chanels, serverName } = props

  const chanelName = chanels[currentChanel].name

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
              >
                {chanel.name}
              </Button>
            )
          })}
        </div>

        <div className="chanels-fotter"> someFooter</div>
      </div>
      <Mesenger
        messages={chanels[currentChanel].messages}
        chanelName={chanelName}
      />
    </div>
  )
}

export default Chanels
