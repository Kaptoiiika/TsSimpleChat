import { observer } from "mobx-react-lite"
import ServerData from "../../store/ServerData"
import Member from "./Member/Members"
import "./Members.css"

const Members = observer(() => {
  const { members: userList } = ServerData.server
  return (
    <div className="Members">
      <h3 className="header Members-header">someMembers</h3>
      <ul className="Members-list">
        {userList.map((user: any, index: number) => {
          if (user === undefined) return " "
          return (
            <Member
              imgUrl={`api/user/avatar/${user._id}`}
              name={user.name}
              status={user.status}
              usercolor={user.color}
              key={index}
            />
          )
        })}
      </ul>
    </div>
  )
})

export default Members
