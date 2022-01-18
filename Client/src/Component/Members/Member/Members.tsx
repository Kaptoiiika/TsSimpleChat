type Props = {
  imgUrl: string
  name: string
  status?: string
  usercolor?: string
}

function Member(props: Props) {
  const { imgUrl, name, status, usercolor="plum" } = props

  return (
    <div className="Member">
      <img className="Member-avatar avatar avatar-40" src={imgUrl} alt="" />
      <div className="Member-user">
        <p className="Member-userName" style={{ color:  usercolor }}>
          {name}
        </p>
        <p className="Member-userStatus">{status}</p>
      </div>
    </div>
  )
}

export default Member
