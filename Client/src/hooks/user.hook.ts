import axios from "axios"
import { useState } from "react"

export const useUser = () => {
  const [userId, setUserId] = useState("")

  const [users, setUsers] = useState({
    [userId]: {
      name: "",
      _id: "",
      icon: "",
      subscribers: "",
    },
  })

  const getData = async (Id: string) => {
    if (users[Id]) {
      return users[Id]
    }
    try {
      const { data } = await axios.get(`api/user/${Id}`)
      users[data._id] = {
        name: data.name,
        _id: data._id,
        icon: data.icon,
        subscribers: data.subscribers,
      }
      setUsers(users)
      return users[data._id]
    } catch (error) {
      console.error(error)
      return { name: "", _id: "", icon: "", subscribers: "" }
    }
  }

  return {
    getData,
    users,
  }
}
