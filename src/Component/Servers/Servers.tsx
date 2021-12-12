import "./Servers.css"
import { Button } from "@material-ui/core"
import { GiHouse, GiBackboneShell, GiBull } from "react-icons/gi"
import { BiPlus, BiCaretDown, BiCaretUp } from "react-icons/bi"

function Servers() {
  const iconColor = "#3ba55d"

  function home() {
    console.log("home")
  }
  function toChangeServer(e: any) {
    console.log("ChangeServer")
  }
  function addServer() {
    console.log("addServer")
  }

  return (
    <div className="Servers">
      <Button
        className="homeButton serverIcon"
        onClick={() => {
          home()
        }}
      >
        <GiHouse color={iconColor} className="serverIcon" size="50px" />
      </Button>
      <BiCaretUp color={iconColor} />
      <Button className="toChangeServer" onClick={toChangeServer}>
        <GiBackboneShell color={iconColor} className="serverIcon" size="50px" />
      </Button>
      <Button className="toChangeServer" onClick={toChangeServer}>
        <GiBull color={iconColor} className="serverIcon" size="50px" />
      </Button>
      <BiCaretDown color={iconColor} />
      <Button
        className="addServer serverIcon"
        onClick={() => {
          addServer()
        }}
      >
        <BiPlus color={iconColor} className="serverIcon" size="50px" />
      </Button>
    </div>
  )
}

export default Servers
