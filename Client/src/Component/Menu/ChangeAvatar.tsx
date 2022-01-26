import "./styles/Settings.scss"
import React from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
} from "@mui/material"
import PreviewUser from "../../Component/ProfileUser/ProfileUser"
import MessageUser from "../../Component/Mesenger/MessageUser/MessageUser"
import { IoImageOutline } from "react-icons/io5"
import { observer } from "mobx-react-lite"
import AuthData from "../../store/AuthData"

import axios from "axios"

type Props = {
  open?: boolean
  onClose: () => void
}

const ChangeAvatar = observer(({ open, onClose }: Props) => {
  const [file, setFile] = React.useState<Blob>(new Blob())

  const handleFileUpload = (e: any) => {
    setFile(e.target.files[0])
  }

  const handleSend = async () => {
    const formData = new FormData()
    formData.append("avatar", file)
    try {
      await axios.post("/api/user/upload/avatar", formData, {
        headers: { Authorization: `Bearer ${AuthData.token}` },
      })
      onClose()
    } catch (error: any) {}
  }

  return (
    <Dialog
      open={open ? open : false}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className="Title">Пример отображения</DialogTitle>
      <DialogContent className="Dialog-content">
        <div className="preview-avatar">
          <MessageUser
            imgUrl={
              !!file.size
                ? URL.createObjectURL(file)
                : `/api/user/avatar/${AuthData.user._id}`
            }
            name={AuthData.user.name}
            text={"Пивка для рывка"}
          />

          <PreviewUser
            imgUrl={
              !!file.size
                ? URL.createObjectURL(file)
                : `/api/user/avatar/${AuthData.user._id}`
            }
            name={AuthData.user.name}
            status={""}
          />
        </div>
        <label htmlFor="icon-button-file">
          <Input
            id="icon-button-file"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span"
          >
            <IoImageOutline color="purple" size="40px" />
          </IconButton>
        </label>
      </DialogContent>
      <DialogActions style={{ backgroundColor: "rgb(47,49,54)" }}>
        <Button onClick={onClose}>Отменить</Button>
        <Button onClick={handleSend} autoFocus>
          Сменить
        </Button>
      </DialogActions>
    </Dialog>
  )
})
export default ChangeAvatar
