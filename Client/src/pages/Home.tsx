import "./styles/Home.css"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
} from "@mui/material"
import axios from "axios"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import AuthData from "../store/AuthData"
import PreviewUser from "../Component/ProfileUser/ProfileUser"
import MessageUser from "../Component/Mesenger/MessageUser/MessageUser"
import { IoImageOutline } from "react-icons/io5"

const Home = observer(() => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<Blob>(new Blob())

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
      handleClose()
    } catch (error: any) {}
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setFile(new Blob())
  }

  return (
    <div className="home">
      <div>
        {JSON.stringify(AuthData.user)}
        <img
          className="avatar"
          src={`/api/user/avatar/${AuthData.user._id}`}
          alt=""
        />
        <Button variant="outlined" onClick={handleClickOpen}>
          Обновить аватар
        </Button>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
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
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <IoImageOutline color="white" size="40px" />
            </IconButton>
          </label>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "rgb(47,49,54)" }}>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={handleSend} autoFocus>
            Сменить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})

export default Home
