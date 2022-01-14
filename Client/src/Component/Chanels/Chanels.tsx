import "./Chanels.css"
import { ListItemButton,  List } from "@mui/material"
import { IoAdd } from "react-icons/io5"
import { observer } from "mobx-react-lite"
import ServerData from "../../store/ServerData"
import AuthData from "../../store/AuthData"

const Chanels = observer(() => {
  const { name: serverName, chanels } = ServerData.server

  return (
    <div className="Chanels">
      <h3 className="header Chanels-header">{serverName}</h3>
      <div className="Chanel-list">
        {chanels.map((obj, index) => {
          return (
            <List key={obj._id}>
              <ListItemButton onClick={() => ServerData.selectChanel(index)}>
                <div className="Chanel-name">
                  <span>{obj.name}</span>
                </div>
                <div className="Chanel-setting">
                  <IoAdd color="white" />
                </div>
              </ListItemButton>
            </List>
          )
        })}
      </div>

      <div className="chanels-fotter">
        <div className="chanels-fotter-user">
          <div className="chanels-fotter-icon">
            <img
              className="avatar-40"
              src={`/api/user/avatar/${AuthData.user._id}`}
              alt=""
            />
          </div>
          {/* https://mui.com/components/menus/ */}
          <div className="chanels-fotter-userData">
            <p className="chanels-fotter-userName">{AuthData.user.name}</p>
            <p className="chanels-fotter-status">{AuthData.user.status}</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Chanels
