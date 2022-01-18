import axios from "axios"
import { makeAutoObservable } from "mobx"
import AuthData from "./AuthData"

class ServerData {
  selected = "0"
  selectedChanel = 0
  server = {
    _id: "null",
    name: "null",
    members: ["null"],
    chanels: [
      {
        _id: "null",
        name: "null",
        messages: [
          {
            _id: "null",
            author: "null",
            text: "null",
            dataCreate: "null",
          },
        ],
      },
    ],
  }
  chanel = {
    _id: "null",
    name: "null",
    messages: [
      {
        _id: "null",
        author: {
          _id: "null",
          name: "null",
          icon: "null.jpg",
        },
        text: "null",
        dataCreate: "null",
      },
    ],
  }

  constructor() {
    makeAutoObservable(this)
  }
  selectChanel(index: number) {
    this.selectedChanel = index
    this.chanelInfo()
  }

  pushMessage(message: {
    _id: string
    author: {
      _id: string
      name: string
      icon: string
    }
    text: string
    dataCreate: string
  }) {
    this.chanel.messages.push(message)
    console.log(message)
  }

  async chanelInfo() {
    try {
      const { data } = await axios.get(`api/chanel/${this.selectedChanel}`, {
        headers: { Authorization: `Bearer ${AuthData.token}` },
      })
      this.chanel = data
      this.selected = data._id
      return ""
    } catch (error: any) {
      console.log(error.response.data.message)
      return error.response.data.message
    }
  }

  selectServer(_id: string) {
    this.selected = _id
    if (_id === "0") return
    this.serverInfo()
  }

  async create(name: string) {
    try {
      const { data } = await axios.post(
        "api/server/create",
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

  async serverInfo() {
    try {
      const { data: server } = await axios.get(`api/server/${this.selected}`, {
        headers: { Authorization: `Bearer ${AuthData.token}` },
      })
      this.server = server
      this.selectChanel(server.chanels[0]._id)
      return ""
    } catch (error: any) {
      return error
    }
  }

  async sendMessage(msg: string) {
    try {
      console.log(this.chanel)
      await axios.post(
        `api/server/message/${this.chanel._id}`,
        {
          msg,
        },
        {
          headers: { Authorization: `Bearer ${AuthData.token}` },
        }
      )
    } catch (error) {
      return error
    }
  }
}

export default new ServerData()
