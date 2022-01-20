import { observer } from "mobx-react-lite"
import ServerData from "../../store/ServerData"
import MessageUser from "./MessageUser/MessageUser"
import "./Mesenger.css"

const Mesenger = observer(() => {
  const { messages, name } = ServerData.chanel

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      ServerData.sendMessage(e.target.value)
      e.target.value = ""
    }
  }

  return (
    <div className="Mesenger">
      <h3 className="header Mesenger-header">{name}</h3>

      <ul className="Mesenger-list">
        {messages.map((obj: any, index, array) => {
          if (obj)
            if (index > 0)
              if (messages[index - 1].author._id === obj.author._id)
                return (
                  <MessageUser
                    imgUrl={`api/user/avatar/${obj.author._id}`}
                    name={obj.author.name}
                    text={obj.text}
                    key={obj._id}
                    noUser
                  />
                )
          return (
            <MessageUser
              imgUrl={`api/user/avatar/${obj.author._id}`}
              name={obj.author.name}
              text={obj.text}
              key={obj._id}
            />
          )
        })}
        <div className="wrapper_Scrollbottom"></div>
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
