import { useContext, useEffect, useState } from "react"
import { chanel } from "../../types/Servers"
import Mesenger from "../Mesenger/Mesenger"
import { Button } from "@mui/material"

import "./Chanels.css"
import { UserContext } from "../../context/UserContext"
import { ServerContext } from "../../context/ServerContext"
import { Loader } from "../Loader/Loader"
import { useHttp } from "../../hooks/http.hook"

function Chanels() {
  const { name, status } = useContext(UserContext)
  const { serverName, chanelsId } = useContext(ServerContext)
  const { request, loading } = useHttp()
  const [chanelList, setChanelsList] = useState(["0"])

  const changeChanel = (_id: "string") => {}

  useEffect(() => {
    async function getData() {
      const data = await Promise.all(
        chanelsId.map(async (chanelId) => {
          if (chanelId !== null) {
            return request(`api/server/chanel/${chanelsId}`, "GET")
          }
        })
      )
      setChanelsList(data)
    }
    getData()
  }, [chanelsId])

  if (loading) {
    return <Loader />
  }
  return (
    <div className="Main">
      <div className="Chanels">
        <h3 className="header Chanels-header">{serverName}</h3>

        {/* <div className="chanels-list">
          {chanelList.map((chanel, index) => {
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
        </div> */}

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
      {/* <Mesenger
        messages={chanels[currentChanel].messages}
        chanelName={chanelName}
        chanelId={chanelId}
        serverId={serverId}
      /> */}
    </div>
  )
}

export default Chanels
