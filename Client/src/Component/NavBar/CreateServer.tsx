import { TextField, Button } from "@mui/material"

import { useContext, useState } from "react"

type Props = {
  handleTooltipClose: any
}

function CreateServer(props: Props) {
  const { handleTooltipClose } = props
  const [form, setForm] = useState({ name: "", password: "" })

  function changeHandler(e: any) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  return (
    <div className="create-page">
      <TextField
        type="name"
        onChange={changeHandler}
        autoComplete="false"
        id="name"
        label="name"
        variant="filled"
      />
      <TextField
        type="password"
        onChange={changeHandler}
        autoComplete="false"
        id="password"
        label="password"
        variant="filled"
      />
      <Button variant="contained">войти</Button>
      <Button variant="contained">создать</Button>
      <Button onClick={handleTooltipClose} variant="contained">
        назад
      </Button>
    </div>
  )
}

export default CreateServer
