import { useRoutes } from "./routes"
import { BrowserRouter } from "react-router-dom"
import { useAuth } from "./hooks/auth.hook"
import "./App.css"
import { AuthContext } from "./context/AuthContext"

function App() {
  const { login, logout, token, userId } = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)
  return (
    <AuthContext.Provider value={{ token, userId, login, logout, isAuth }}>
      <header className="App-header"></header>
      <BrowserRouter>
        <div className="container">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
