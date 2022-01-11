import "./CreateChanel.css"
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material"
import {  useState } from "react"


function CreateChanel() {

  const [form, setForm] = useState({ name: "" })

  function changeHandler(e: any) {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  async function createHandler() {

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
