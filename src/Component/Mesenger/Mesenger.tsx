import "./Mesenger.css"
import Mesage from "./Mesage/Mesage"

function Mesenger() {
  return (
    <div className="Mesenger">
      <h3 className="header Mesenger-header">SomeServer</h3>
      <ul className="Mesenger-list">
          <Mesage Mesage={{ userId: 0, msg: "hello world" }} />
          <Mesage Mesage={{ userId: 1, msg: "Second world" }} />
          <Mesage Mesage={{ userId: 2, msg: "The hell" }} />
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
