import Chanel from "./Chanel/Chanel"
import "./Chanels.css"

function Chanels() {
  return (
    <div className="Chanels">
      <h3 className="header Chanels-header">SomeServer</h3>
      <div className="chanels-list">
        <Chanel chanel={{ id: 0, name: "firstName" }} />
        <Chanel chanel={{ id: 1, name: "SecondName" }} />
        <Chanel chanel={{ id: 2, name: "ThridName" }} />
      </div>
      <div className="chanels-fotter"> someFooter</div>
    </div>
  )
}

export default Chanels
