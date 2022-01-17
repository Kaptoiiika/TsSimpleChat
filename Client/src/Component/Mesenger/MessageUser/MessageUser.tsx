import "./MessageUser.css"
import { observer } from "mobx-react-lite"

type Props = {
  imgUrl: string
  name: string
  text: string
  noUser?: boolean
}

const MessageUser = observer((props: Props) => {
  const { imgUrl, name, text, noUser } = props

  if (noUser)
    return (
      <div className="Message Message-empty">
        <div className="Message-avatar-empty Message-avatar"></div>
        <div className="Message-content">
          <div className="Message-content-text">{text}</div>
        </div>
      </div>
    )
  return (
    <div className="Message">
      <img className="Message-avatar avatar avatar-40" src={imgUrl} alt="" />
      <div className="Message-content">
        <div className="Message-content-userName">{name}</div>
        <div className="Message-content-text">{text}</div>
      </div>
    </div>
  )
})

export default MessageUser
