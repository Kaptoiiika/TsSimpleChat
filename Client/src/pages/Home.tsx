import "./styles/Home.css"
import { observer } from "mobx-react-lite"
import AccountProfile from "../Component/Menu/AccountProfile"

const Home = observer(() => {

  return (
    <div className="home">
      <AccountProfile />  
    </div>
  )
})

export default Home
