import "./NavBar.css"
import { Button, Tooltip } from "@mui/material"
import {
  GiHouse,
  GiBackboneShell,
  GiBull,
  GiRollingEnergy,
  GiPirateFlag,
  GiMoebiusTriangle,
} from "react-icons/gi"
import { BiPlus } from "react-icons/bi"
import { useContext, useEffect, useState } from "react"
import CreateServer from "./CreateServer"
import { useHttp } from "../../hooks/http.hook"
import { UserContext } from "../../context/UserContext"
import { ServerContext } from "../../context/ServerContext"

type Props = {
  setServer: any
}

function Servers(props: Props) {
  const { subscribers } = useContext(UserContext)
  const { setServerData } = useContext(ServerContext)
  const { request } = useHttp()
  const [serverList, setServerList] = useState([
    {
      chanelsId: [],
      membersId: ["61cd5b5fa6b0f3a0912c900a"],
      name: "Kaptoiiika13",
      _id: "61d3300aee4924afe75e749e",
    },
  ])
  const iconColor = "#3ba55d"
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function getData() {
      const data = await Promise.all(
        subscribers.map(async (serverId) => {
          if (serverId !== `null`) {
            return request(`api/server/${serverId}`, "GET")
          }
        })
      )
      setServerList(data)
    }
    getData()
  }, [subscribers])

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  function home() {
    console.log("home page")
  }

  const toChangeServer = (_id: string) => {
    setServerData(_id)
  }

  const handleTitle = (sever: any) => {
    if (sever) return sever.name
    return " "
  }

  const randomicons = (index: number) => {
    switch (index) {
      case 0:
        return (
          <GiRollingEnergy
            color={iconColor}
            className="serverIcon"
            size="50px"
          />
        )

      case 1:
        return (
          <GiBackboneShell
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
          <GiMoebiusTriangle
            color={iconColor}
            className="serverIcon"
            size="50px"
          />
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
        <Button
          className="Server"
          startIcon={
            <GiHouse color={iconColor} className="serverIcon" size="50px" />
          }
          onClick={() => {
            home()
          }}
        />
        {serverList
          ? serverList.map((server: any, index: number) => {
              return (
                <div className="" key={index}>
                  <Tooltip
                    className="Server"
                    placement="right"
                    title={handleTitle(server)}
                  >
                    <Button
                      onClick={() => {
                        toChangeServer(server._id)
                      }}
                      startIcon={randomicons(index)}
                    />
                  </Tooltip>
                </div>
              )
            })
          : " "}

        <div className="addServer">
          <Tooltip
            className="Server"
            placement="right-start"
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={<CreateServer handleTooltipClose={handleTooltipClose} />}
          >
            <Button
              onClick={handleTooltipOpen}
              startIcon={
                <BiPlus color={iconColor} className="serverIcon" size="50px" />
              }
            />
          </Tooltip>
        </div>
      </div>
    </>
  )
}

export default Servers
