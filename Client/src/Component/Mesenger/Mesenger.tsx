import { useContext } from "react"
import { ChanelContext } from "../../context/ChanelContext"
import Message from "./Mesage/Mesage"
import "./Mesenger.css"

function Mesenger() {
  const { sendMessage, messages, chanelName } = useContext(ChanelContext)

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      sendMessage(e.target.value)
      e.target.value = ""
    }
  }

  return (
    <div className="Mesenger">
      <h3 className="header Mesenger-header">{chanelName}</h3>
      <ul className="Mesenger-list">
        {messages.map((obj: any, index) => {
          if (obj)
            return (
              <Message
                message={obj.message}
                ownerId={obj.ownerId}
                key={index}
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
}

export default Mesenger
