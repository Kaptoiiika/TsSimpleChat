import { Routes, Route } from "react-router-dom"
import ApplicationPage from "./pages/ApplicationPage"
import AuthPage from "./pages/AuthPage"

export function useRoutes(isAuth: any) {
  if (isAuth) {
    return (
      <Routes>
        <Route path="*" element={<ApplicationPage />} />
      </Routes>
    )
  }
  return (
    <Routes>
      <Route path="*" element={<AuthPage />} />
    </Routes>
  )
}
