import { useEffect, useState } from "react"
import { useAuth } from "./auth.hook"
import { useHttp } from "./http.hook"

export const useChanel = () => {
  const { request } = useHttp()
  const { userId } = useAuth()
  const [chanelId, setChanelId] = useState(null)
  const [chanelName, setChanelname] = useState(null)
  const [messages, setMessages] = useState([null])

  const setChanel = async (Id: string) => {
    try {
      const data = await request(`api/chanel/${Id}`, "get")
      setChanelId(data._id)
      setChanelname(data.name)
      setMessages(data.messages)
    } catch (error: any) {
      console.log(error.message)
    }
  }
  const sendMessage = async (msg: string) => {
    try {
      const data = await request(`api/chanel/message/create`, "post", {
        message: msg,
        ownerId: userId,
        chanelId: chanelId,
      })
      if (chanelId) setChanel(chanelId)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return {
    setChanel,
    sendMessage,
    chanelId,
    chanelName,
    messages,
  }
}
