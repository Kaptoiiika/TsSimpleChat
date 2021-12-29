import { user } from "../../types/Users"
import { defaultIcon } from "../unknowComponent/defaultIcons"
import "./Members.css"

type Props = {
  users: {
    id: number
    name: string
    icon?: string
    status?: string
    contact?: string
    permison?: string
    color?: string
  }[]
}

function Members(props: Props) {
  const { users } = props

  return (
    <div className="Members">
      <h3 className="header Members-header">someMembers</h3>
      <ul className="Members-list">
        {users.map((user: user, index: number) => {
          return (
            <div className="Member" key={user.id}>
              <img
                className="Member-userIcon"
                src={user.icon ? user.icon : defaultIcon}
                alt=""
              />
              <div className="Member-user">
                <p className="Member-userName">{user.name}</p>
                <p className="Member-userStatus">
                  {user.status ? user.status : " "}
                </p>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Members
