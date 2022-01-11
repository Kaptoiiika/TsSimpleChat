
import { observer } from "mobx-react-lite"
import AuthData from "../store/AuthData"

const Home = observer(() => {
  return (
    <div>
      
      {JSON.stringify(AuthData.user)}
      <img src={`/api/user/avatar/${AuthData.user._id}`} alt="" />
    </div>
  )
})

export default Home
