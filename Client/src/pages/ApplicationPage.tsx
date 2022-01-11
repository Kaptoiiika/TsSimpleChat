import { useState } from "react"
import Chanels from "../Component/Chanels/Chanels"
import Members from "../Component/Members/Members"
import Mesenger from "../Component/Mesenger/Mesenger"
import NavBar from "../Component/NavBar/NavBar"

import HomePage from "./Home"

function ApplicationPage() {
  const [server, setServer] = useState(0)

  return (
    <div className="App">
      <NavBar setServer={setServer} />
      {server ? (
        <>
          <Chanels />
          <Mesenger />
          <Members />
        </>
      ) : (
        <HomePage />
      )}
    </div>
  )
}

export default ApplicationPage
