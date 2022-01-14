import { observer } from "mobx-react-lite"
import Chanels from "../Component/Chanels/Chanels"
import Members from "../Component/Members/Members"
import Mesenger from "../Component/Mesenger/Mesenger"
import NavBar from "../Component/NavBar/NavBar"
import ServerData from "../store/ServerData"

import HomePage from "./Home"

const ApplicationPage = observer(() => {
  return (
    <div className="App">
      <NavBar />
      {ServerData.selected === "0" ? (
        <HomePage />
      ) : (
        <>
          <Chanels />
          <Mesenger />
          <Members />
        </>
      )}
    </div>
  )
})

export default ApplicationPage
