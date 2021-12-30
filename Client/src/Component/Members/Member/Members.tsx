import { defaultIcon } from "../../unknowComponent/defaultIcons"

type Props = {
  user: {
    id: number
    name: string
    icon?: string
    status?: string
    contact?: string
    permison?: string
    color?: string
  }
}

function Member(props: Props) {
  const { user } = props

  return (
    <div className="Member" key={user.id}>
      <img
        className="Member-userIcon"
        src={user.icon ? user.icon : defaultIcon}
        alt=""
      />
      <div className="Member-user">
        <p className="Member-userName">{user.name}</p>
        <p className="Member-userStatus">{user.status ? user.status : " "}</p>
      </div>
    </div>
  )
}

export default Member
