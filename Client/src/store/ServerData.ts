
import { makeAutoObservable } from "mobx"

class ServerData {
  selected = "0"
  isAuth = false
  token = ""
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
}

export default new ServerData()
