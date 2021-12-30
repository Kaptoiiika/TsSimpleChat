import { user } from "../../types/Users"
import Member from "./Member/Members"
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
          return <Member user={user} />
        })}
      </ul>
    </div>
  )
}

export default Members
