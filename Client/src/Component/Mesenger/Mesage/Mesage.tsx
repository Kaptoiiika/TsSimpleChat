import "./Message.css"

type Props = {
  message: string
  ownerId: string
}
function Message(props: Props) {
  const { message, ownerId } = props
  return (
    <li className="Mesage">
      <img className="userIcon" src={"" || ""} alt="" />
      <div className="user">
        <p className="userName">{ownerId}</p>
        <p className="msg">{message}</p>
      </div>
    </li>
  )
}

export default Message
