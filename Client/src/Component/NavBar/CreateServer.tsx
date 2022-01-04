import { TextField, Button } from "@mui/material"

import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { UserContext } from "../../context/UserContext"
import { useHttp } from "../../hooks/http.hook"

type Props = {
  handleTooltipClose: any
}

function CreateServer(props: Props) {
  const {  request } = useHttp()
  const auth = useContext(AuthContext)
  const { getData } = useContext(UserContext)
  const { handleTooltipClose } = props
  const [form, setForm] = useState({ name: "", password: "" })

  function changeHandler(e: any) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }
  async function createHandler() {
    try {
      await request("api/server/create", "POST", {
        ...form,
        membersId: auth.userId,
      })
      getData(auth.userId || " ")
    } catch (error) {}
  }
  async function addHandler() {
    try {
      await request("api/server/adduser", "POST", {
        ...form,
        membersId: auth.userId,
      })
      getData(auth.userId || " ")
    } catch (error) {}
  }
  return (
    <div className="create-page">
      <TextField
        type="name"
        onChange={changeHandler}
        id="name"
        label="name"
        variant="filled"
      />
      <TextField
        type="password"
        className="password"
        onChange={changeHandler}
        id="password"
        label="password"
        variant="filled"
      />
      <Button onClick={addHandler} variant="contained">
        войти
      </Button>
      <Button onClick={createHandler} variant="contained">
        создать
      </Button>
      <Button onClick={handleTooltipClose} variant="contained">
        назад
      </Button>
    </div>
  )
}

export default CreateServer
