import { TextField, Button } from "@mui/material"
import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import "./styles/AuthPage.css"
import AuthData from "../store/AuthData"
import { observer } from "mobx-react-lite"

const AuthPage = observer(() => {
  const [form, setForm] = useState({ name: "", password: "" })

  function changeHandler(e: any) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  async function registerHandler() {
    try {
      await axios.post("api/user/register", { ...form })
    } catch (error) {}
  }

  function loginHandler() {
    AuthData.login(form.name, form.password)
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
            // helperText={error || " "}
            id="password"
            label="password"
            variant="filled"
          />
        </div>
        <div className="send-btn">
          <Button
            onClick={loginHandler}
            disabled={AuthData.loading}
            variant="contained"
            color="success"
          >
            Войти
          </Button>
          <Button
            onClick={registerHandler}
            disabled={AuthData.loading}
            variant="contained"
          >
            Зарегистрироваться
          </Button>
        </div>
      </div>
    </div>
  )
})

export default AuthPage
