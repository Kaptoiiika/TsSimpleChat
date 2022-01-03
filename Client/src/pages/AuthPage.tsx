
import { TextField, Button } from "@mui/material"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/http.hook"
import "./styles/AuthPage.css"

function AuthPage() {
  const auth = useContext(AuthContext)
  const { loading, error, request } = useHttp()
  const [form, setForm] = useState({ name: "", password: "" })

  function changeHandler(e: any) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  async function registerHandler() {
    try {
      const data = await request("api/user/register", "POST", { ...form })
    } catch (error) {}
  }
  async function loginHandler() {
    try {
      const data = await request("api/user/login", "POST", { ...form })
      auth.login(data.token, data.userId)
    } catch (error) {}
  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card-label">Шутки</div>
        <div className="send-form">
          <TextField
            type="name"
            onChange={changeHandler}
            id="name"
            label="name"
            variant="filled"
          />
          <TextField
            type="password"
            className="password"
            onChange={changeHandler}
            helperText={error || " "}
            id="password"
            label="password"
            variant="filled"
          />
        </div>
        <div className="send-btn">
          <Button onClick={loginHandler} disabled={loading} variant="contained" color="success">
            Войти
          </Button>
          <Button onClick={registerHandler} disabled={loading} variant="contained">
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
