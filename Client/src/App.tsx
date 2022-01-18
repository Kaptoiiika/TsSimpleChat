import { useRoutes } from "./routes"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import AuthData from "./store/AuthData"
import socket from "./webSocket"

const App = observer(() => {
  const routes = useRoutes(AuthData.isAuth)

  useEffect(() => {
    AuthData.loginToken()
  }, [])
  console.log(socket)

  if (AuthData.firstLoad) {
    return <span>Loading</span>
  }

  return (
    <>
      <header className="App-header"></header>
      <BrowserRouter>
        <div className="container">{routes}</div>
      </BrowserRouter>
    </>
  )
})

export default App
