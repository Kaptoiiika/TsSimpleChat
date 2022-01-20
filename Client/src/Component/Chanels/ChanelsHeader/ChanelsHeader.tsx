import "./ChanelsHeader.css"
import { AppBar, Button } from "@mui/material"
import { IoChevronDownOutline, IoCloseSharp } from "react-icons/io5"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import ServerData from "../../../store/ServerData"

const ChanelsHeader = observer(() => {
  const { name: serverName } = ServerData.server

  const [open, setOpen] = useState<boolean>(false)

  const handleMenu = (event: any) => {
    setOpen(!open)
  }
  const handleCreate = (event: any) => {
    console.log("create")
  }

  return (
    <AppBar
      style={{ backgroundColor: "#2f3136" }}
      className="header Chanels-header"
      position="static"
    >
      <Button
        style={{ padding: 0 }}
        className="container"
        color="inherit"
        onClick={handleMenu}
      >
        <div className="Chanels-header-content">
          <h4 className="Chanels-header-content-name">{serverName}</h4>
          {open ? (
            <IoCloseSharp size={20} />
          ) : (
            <IoChevronDownOutline size={20} />
          )}
        </div>
      </Button>
      <div style={{ display: open ? "flex" : "none" }} className="Server-menu">
        <button className="Server-menu-button" color="inherit" onClick={handleCreate}>
          Create chanel
        </button>
        <button className="Server-menu-button" color="inherit" onClick={handleCreate}>
          ne Create chanel
        </button>
      </div>
    </AppBar>
  )
})

export default ChanelsHeader
