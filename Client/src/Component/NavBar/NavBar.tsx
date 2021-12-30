import "./NavBar.css"
import { Button } from "@material-ui/core"
import { GiHouse, GiBackboneShell, GiBull } from "react-icons/gi"
import { BiPlus, BiCaretDown, BiCaretUp } from "react-icons/bi"

type Props = {
  setServer: any
}

function Servers(props: Props) {
  const { setServer } = props
  const iconColor = "#3ba55d"

  function home() {
    setServer(-1)
  }
  function addServer() {
    setServer(-2)
  }
  function toChangeServer(serverId: number) {
    setServer(serverId)
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
    </>
  )
}

export default Servers
