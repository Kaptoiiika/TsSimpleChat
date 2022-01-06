import { useState } from "react"
import { useHttp } from "./http.hook"

export const useServer = () => {
  const {  request } = useHttp()
  const [serverName, setServerName] = useState(null)
  const [serverId, setserverId] = useState(null)
  const [chanelsId, setchanelsId] = useState([null])
  const [membersId, setmembersId] = useState([null])

  const setServerData = async (Id: string) => {
    try {
      const data = await request(`api/server/${Id}`, "get")
      setServerName(data.name)
      setchanelsId(data.chanelsId)
      setmembersId(data.membersId)
      setserverId(data._id)
    } catch (error) {}
  }
  return {
    setServerData,
    serverId,
    serverName,
    chanelsId,
    membersId,
  }
}
