import { useRoutes } from "./routes"
import { BrowserRouter } from "react-router-dom"
import "./App.css"

function App() {
  const routes = useRoutes(true)
  return (
    <>
      <header className="App-header"></header>
      <BrowserRouter>
        <div className="container">{routes}</div>
      </BrowserRouter>
    </>
  )
}

export default App
