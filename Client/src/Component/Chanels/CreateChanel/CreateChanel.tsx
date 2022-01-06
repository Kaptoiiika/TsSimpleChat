import "./CreateChanel.css"
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material"
import { useContext, useState } from "react"
import { AuthContext } from "../../../context/AuthContext"
import { useHttp } from "../../../hooks/http.hook"
import { ServerContext } from "../../../context/ServerContext"

function CreateChanel() {
  const { error, request } = useHttp()
  const auth = useContext(AuthContext)
  const { serverId, setServerData } = useContext(ServerContext)
  const [form, setForm] = useState({ name: "" })

  function changeHandler(e: any) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }
  async function createHandler() {
    try {
      await request("api/chanel/create", "POST", {
        ...form,
        ownerId: auth.userId,
        serverId: serverId,
      })
      setServerData(serverId || "aza")
    } catch (error) {}
  }

  return (
    <Card className="create-chanel" sx={{ minWidth: 275 }}>
      <CardContent>
        <TextField
          type="name"
          onChange={changeHandler}
          autoComplete="false"
          id="name"
          label="name"
          variant="filled"
          helperText={error || " "}
        />
        <CardActions>
          <Button onClick={createHandler} variant="contained">
            создать
          </Button>
          <Button variant="contained">отмена</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default CreateChanel