import { useState } from "react"
import { useHttp } from "./http.hook"

export const useUser = () => {
  const { request } = useHttp()
  const [name, setName] = useState(null)
  const [userId, setUserId] = useState(null)
  const [status, setStatus] = useState(null)
  const [subscribers, setSubscribers] = useState(["null"])
  const [contact, setContact] = useState(null)

  const getData = async (Id: string) => {
    try {
      const data = await request(`api/user/${Id}`, "get")
      setName(data.name)
      setUserId(data.UserId)
      setStatus(data.Status)
      setSubscribers(data.subscribers)
      setContact(data.Contact)
    } catch (error) {}
  }
  return {
    getData,
    name,
    userId,
    status,
    contact,
    subscribers,
  }
}
