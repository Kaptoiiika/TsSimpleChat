import axios from "axios"
import { useState, useCallback, useEffect } from "react"

const storageName = "userData"

export const useAuth = () => {
  const [token, setToken] = useState("")
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState("")

  const login = useCallback((jwtToken, id) => {
    if (!jwtToken && !id) return ""
    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    )
  }, [])

  const logout = useCallback(() => {
    setToken("")
    setUserId("")
    localStorage.removeItem(storageName)
    window.location.reload()
  }, [])


  return { login, logout, token, userId, ready }
}
