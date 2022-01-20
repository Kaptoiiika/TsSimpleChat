import { Menu } from "@mui/material"
import { useState } from "react"
import ProfileUser from "../../ProfileUser/ProfileUser"

type Props = {
  imgUrl: string
  name: string
  status?: string
  usercolor?: string
}

function Member(props: Props) {
  const { imgUrl, name, status, usercolor = "plum" } = props
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleOpen = () => {
    setOpen(!open)
  }
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
    setOpen(!open)
  }

  return (
    <div
      className={`Member ${open ? "Member-active" : ""}`}
      onClick={handleClick}
    >
      <img className="Member-avatar avatar avatar-32" src={imgUrl} alt="" />
      <div className="Member-user">
        <p className="Member-userName" style={{ color: usercolor }}>
          {name}
        </p>
        <p className="Member-userStatus">{status}</p>
      </div>

      <Menu
        style={{ margin: "0 0 0 -15px" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleOpen}
        transformOrigin={{ horizontal: "right", vertical: "center" }}
      >
        <div style={{ zIndex: 100 }}>
          <ProfileUser imgUrl={imgUrl} name={name} status={status} />
        </div>
      </Menu>
    </div>
  )
}

export default Member
