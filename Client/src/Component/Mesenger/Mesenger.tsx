import "./Mesenger.css"

function Mesenger() {
  function handleKeyDown(e: any) {
    if (e.key === "Enter") {
      console.log('serverId, chanelId')
      e.target.value = ""
    }
  }

  return (
    <div className="Mesenger">
      <h3 className="header Mesenger-header">someName</h3>
      <ul className="Mesenger-list">
        {/* {messages.map((mesage: messages) => {
          return <Message message={mesage} key={mesage.id} />
        })} */}
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
