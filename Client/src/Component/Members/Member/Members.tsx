

type Props = {
  user: {
    _id: string
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
    <div className="Member" key={user._id}>
      <img
        className="Member-userIcon"
        src={" "}
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
