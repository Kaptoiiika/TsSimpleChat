import axios from "axios"
import { makeAutoObservable } from "mobx"

const storageName = "userData"
class AuthData {
  loading = false
  isAuth = false
  token = ""
  user = {}
  constructor() {
    makeAutoObservable(this)
  }
  login(login: string, password: string) {
    axios
      .post("/api/user/login", { name: login, password: password })
      .then(({ data }) => {
        this.token = data.token
        this.user = data.user
        this.isAuth = true
        localStorage.setItem(
          storageName,
          JSON.stringify({
            token: data.token,
          })
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }

  loginToken() {
    this.loading = true
    const token = JSON.parse(localStorage.getItem(storageName) || "{}")
    axios
      .get("/api/user/auth", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        this.token = data.token
        this.user = data.user
        this.isAuth = true
        localStorage.setItem(
          storageName,
          JSON.stringify({
            token: data.token,
          })
        )
      })
      .catch((error) => {
        console.error(this)
        this.token = ""
        localStorage.removeItem(storageName)
      })
      .finally(() => {
        this.loading = false
      })
  }
}

export default new AuthData()
