import "./Message.css"
import users from "../../../data/Users"

import { messages } from "../../../types/Servers"

type Props = {
  message: messages
}
function Message(props: Props) {
  const { id, userId, msg } = props.message
  const user = users[userId]
  return (
    <li className="Mesage" id={`messageId:${id}`}>
      <img
        className="userIcon"
        src={user.icon || ""}
        alt=""
      />
      <div className="user">
        <p className="userName">{user.name}</p>
        <p className="msg">{msg}</p>
      </div>
    </li>
  )
}

export default Message
