import "./ProfileUser.css"
import { observer } from "mobx-react-lite"

type Props = {
  imgUrl: string
  name: string
  status?: string
}

const ProfileUser = observer((props: Props) => {
  const { imgUrl, name, status } = props
  return (
    <div className="ProfileUser">
      <div className="ProfileUser-banner"></div>
      <img
        className="ProfileUser-avatar avatar avatar-80"
        src={imgUrl}
        alt=""
      />
      <div className="ProfileUser-user">
        <span className="ProfileUser-user-name">{name}</span>
      </div>
      <div className="ProfileUser-user-line"> </div>
      <div className="ProfileUser-user-status">
        <span className="ProfileUser-user-status-text">
          {status || "За честь и отвагу!"}
        </span>
      </div>
    </div>
  )
})

export default ProfileUser
