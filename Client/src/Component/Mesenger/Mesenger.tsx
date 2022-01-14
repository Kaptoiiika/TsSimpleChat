import { observer } from "mobx-react-lite"
import ServerData from "../../store/ServerData"
import MessageUser from "./MessageUser/MessageUser"
import "./Mesenger.css"

const Mesenger = observer(() => {
  const messages = ServerData.chanel.messages

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      ServerData.sendMessage(e.target.value)
      e.target.value = ""
    }
  }

  return (
    <div className="Mesenger">
      <h3 className="header Mesenger-header">{`chanelName`}</h3>
      <ul className="Mesenger-list">
        {messages.map((obj: any) => {
          if (obj)
            return (
              <MessageUser
                imgUrl={`/api/user/avatar/${obj.author}`}
                name={"Kaptoiiika13"}
                text={obj.text}
                key={obj.id}
              />
            )
        })}
      </ul>
      <div className="Mesenger-fotter">
        <input
          className="Mesenger-input"
          autoComplete="off"
          type="text"
          name="input"
          placeholder="someText"
          onKeyDown={handleKeyDown}
        ></input>
      </div>
    </div>
  )
})

export default Mesenger
