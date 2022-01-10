import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { AuthContext } from "../context/AuthContext"

function Home() {
  const { getData } = useContext(UserContext)
  const auth = useContext(AuthContext)
  const [user, setUser] = useState({
    name: "",
    _id: "",
    icon: "",
    subscribers: "",
  })


  return (
    <div>
      {JSON.stringify(user)}
      <img src={`/api/user/avatar/${user._id}`} alt=""/>
    </div>
  )
}

export default Home
