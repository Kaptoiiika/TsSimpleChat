import {
  TextField,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material"

import { useState } from "react"
import AuthData from "../../store/AuthData"
import ServerData from "../../store/ServerData"

type Props = {
  handleTooltipClose: any
}

const CreateServer = (props: Props) => {
  const { handleTooltipClose } = props
  const [error, setError] = useState("")
  const [form, setForm] = useState({ name: "" })

  function changeHandler(e: any) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }
  const handleSubscribe = async () => {
    const err = await AuthData.subscribe(form.name)
    setError(err)
    if (!err) handleTooltipClose()
  }

  const handleCreate = async () => {
    const err = await ServerData.create(form.name)
    setError(err)
    if (!err) handleTooltipClose()
  }

  return (
    <>
      <DialogTitle className="Title">Создание сервера</DialogTitle>
      <DialogContent className="Dialog-content">
        <TextField
          type="name"
          onChange={changeHandler}
          id="name"
          error={!!error}
          helperText={error}
          margin="dense"
          label="name"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions style={{ backgroundColor: "rgb(47,49,54)" }}>
        <Button variant="contained" onClick={handleSubscribe}>
          войти
        </Button>
        <Button variant="contained" onClick={handleCreate}>
          создать
        </Button>
        <Button onClick={handleTooltipClose} variant="contained">
          назад
        </Button>
      </DialogActions>
    </>
  )
}

export default CreateServer
