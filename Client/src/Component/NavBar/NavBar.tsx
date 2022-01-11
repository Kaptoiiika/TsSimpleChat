import "./NavBar.css"
import { Dialog, Tooltip } from "@mui/material"
import {
  GiHouse,
  GiBull,
  GiRollingEnergy,
  GiPirateFlag,
  GiMoebiusTriangle,
  GiMouthWatering,
  GiAngelOutfit,
  GiExitDoor,
} from "react-icons/gi"
import { BiPlus } from "react-icons/bi"
import { useState } from "react"
import CreateServer from "./CreateServer"
import AuthData from "../../store/AuthData"
import { observer } from "mobx-react-lite"
import ServerData from "../../store/ServerData"

type Props = {
  setServer: any
}

const Servers = observer((props: Props) => {
  const serverList = AuthData.user.subscribers
  const [open, setOpen] = useState(false)

  const iconColor = "#3ba55d"

  const handleClose = () => {
    setOpen(false)
  }

  const handlepOpen = () => {
    setOpen(true)
  }

  function home() {
    console.log("home page")
  }

  const toChangeServer = (_id: string) => {
    ServerData.selectServer(_id)
  }

  const handleTitle = (sever: any) => {
    if (sever) return sever.name
    return " "
  }

  const randomicons = (index: number) => {
    switch (index) {
      case 0:
        return (
          <GiMoebiusTriangle
            color={iconColor}
            className="serverIcon"
            size="50px"
          />
        )

      case 1:
        return (
          <GiMouthWatering
            color={iconColor}
            className="serverIcon"
            size="50px"
          />
        )

      case 2:
        return <GiBull color={iconColor} className="serverIcon" size="50px" />

      case 3:
        return (
          <GiPirateFlag color={iconColor} className="serverIcon" size="50px" />
        )

      case 4:
        return (
          <GiAngelOutfit color={iconColor} className="serverIcon" size="50px" />
        )

      default:
        return (
          <GiRollingEnergy
            color={iconColor}
            className="serverIcon"
            size="50px"
          />
        )
    }
  }

  return (
    <>
      <div className="Servers">
        <div>
          <button
            className="Server "
            onClick={() => {
              home()
            }}
          >
            <GiHouse color={iconColor} className="serverIcon " size="50px" />
          </button>

          {serverList.map((server: any, index: number) => {
            return (
              <Tooltip
                key={index}
                className="Server"
                placement="right"
                title={handleTitle(server)}
              >
                <button
                  onClick={(e) => {
                    toChangeServer(server._id)
                  }}
                >
                  {randomicons(index)}
                </button>
              </Tooltip>
            )
          })}
          <div className="addServer">
            <button className="Server" onClick={handlepOpen}>
              <BiPlus color={iconColor} className="serverIcon" size="50px" />
            </button>
          </div>
        </div>
        <button
          className="Server logout"
          id="logout"
          onClick={() => {
            AuthData.logout()
          }}
        >
          <GiExitDoor color={iconColor} size="50px" />
        </button>
        <Dialog className="Server" open={open}>
          <CreateServer handleTooltipClose={handleClose} />
        </Dialog>
      </div>
    </>
  )
})

export default Servers
