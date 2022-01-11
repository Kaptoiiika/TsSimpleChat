import { TextField, Button } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import "./styles/AuthPage.css"
import AuthData from "../store/AuthData"
import { observer } from "mobx-react-lite"

const AuthPage = observer(() => {
  const [form, setForm] = useState({ name: "", password: "" })
  const [error, setError] = useState("")

  function changeHandler(e: any) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  async function registerHandler() {
    setError(await AuthData.registertration(form.name, form.password))
  }

  async function loginHandler() {
    setError(await AuthData.login(form.name, form.password))
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
            margin="dense"
            label="name"
            variant="standard"
          />
          <TextField
            type="password"
            className="password"
            onChange={changeHandler}
            margin="dense"
            error={!!error}
            helperText={error}
            id="password"
            label="password"
            variant="standard"
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
