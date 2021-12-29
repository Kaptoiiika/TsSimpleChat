import "./Mesenger.css"
import Message from "./Mesage/Mesage"
import { messages } from "../../types/Servers"

type Props = {
  messages: messages[]
  chanelName: string
  serverId: number
  chanelId: number
}

function Mesenger(props: Props) {
  const { messages, chanelName,serverId,chanelId } = props

  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      console.log(serverId,chanelId)
      e.target.value = "";
    }
  }

  return (
    <div className="Mesenger">
      <h3 className="header Mesenger-header">{chanelName}</h3>
      <ul className="Mesenger-list">
        {messages.map((mesage: messages) => {
          return <Message message={mesage} key={mesage.id} />
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
