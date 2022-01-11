import "./MessageUser.css"
import { observer } from "mobx-react-lite"

type Props = {
  imgUrl: string
  name: string
  text: string
}

const MessageUser = observer((props: Props) => {
  const { imgUrl, name, text } = props
  return (
    <div className="Message">
      <img className="Message-avatar avatar avatar-40" src={imgUrl} alt="" />
      <div className="Message-content">
        <div className="Message-content-user">{name}</div>
        <div className="Message-content-text">{text}</div>
      </div>
    </div>
  )
})

export default MessageUser
