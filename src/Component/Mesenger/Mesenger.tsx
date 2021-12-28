import "./Mesenger.css"
import Message from "./Mesage/Mesage"
import { messages } from "../../types/Servers"

type Props = {
  messages: messages[]
  chanelName: string
}

function Mesenger(props: Props) {
  const { messages, chanelName } = props
  
  return (
    <div className="Mesenger">
      <h3 className="header Mesenger-header">{chanelName}</h3>
      <ul className="Mesenger-list">
        {messages.map((mesage: messages) => {
          return <Message message={mesage} />
        })}
      </ul>
      <div className="Mesenger-fotter">
        <input
          className="Mesenger-input"
          type="text"
          name="input"
          placeholder="someText"
        ></input>
      </div>
    </div>
  )
}

export default Mesenger
