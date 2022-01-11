import axios from "axios"
import { makeAutoObservable } from "mobx"
import AuthData from "./AuthData"

class ServerData {
  selected = "0"
  server = {
    _id: "null",
    name: "null",
    icon: "null",
    subscribers: [{ _id: "null", name: "null" }],
  }

  constructor() {
    makeAutoObservable(this)
  }

  selectServer(_id: string) {
    this.selected = _id
  }

  async create(name: string) {
    try {
      const { data } = await axios.post(
        "api/server//create",
        {
          name: name,
        },
        {
          headers: { Authorization: `Bearer ${AuthData.token}` },
        }
      )
      this.server = data.server
      this.selected = this.server._id
      AuthData.update()
      return ""
    } catch (error: any) {
      console.log(error.response.data.message)
      return error.response.data.message
    }
  }
  async subscribe() {
    try {
      return ""
    } catch (error: any) {
      return error.response.data.message
    }
  }
}

export default new ServerData()
