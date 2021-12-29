import { Routes, Route } from "react-router-dom"
import ApplicationPage from "./pages/ApplicationPage"
import AuthPage from "./pages/AuthPage"
import CreateServer from "./pages/CreateServer"
import HomePage from "./pages/HomePage"

export function useRoutes(isAuth: any) {
  if (isAuth) {
    return (
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/app" element={<ApplicationPage />} />
        <Route path="/createServer" element={<CreateServer />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="*" element={<AuthPage />} />
    </Routes>
  )
}
