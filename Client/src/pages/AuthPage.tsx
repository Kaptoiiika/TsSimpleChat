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
        <div>Auth</div>
        <input
          id="name"
          placeholder="name"
          type="text"
          onChange={changeHandler}
        ></input>
        <input
          id="password"
          placeholder="password"
          type="password"
          onChange={changeHandler}
        ></input>
        <div>
          <button className="send-btn" onClick={loginHandler}>
            Войти
          </button>

          <button className="send-btn" onClick={registerHandler}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
