import { Button } from "@mui/material"
import { useContext } from "react"


type Props = {
  chanelId: string
  chanelName: string
}

function Chanel(props: Props) {
  const { chanelId, chanelName } = props

  const handleChange = (_id: string) => {
    // setChanel(_id)
  }

  return (
    <div className="Chanel">
      <Button
        className="Chanel-button"
        onClick={() => {
          handleChange(chanelId)
        }}
      >
        {chanelName}
      </Button>
    </div>
  )
}

export default Chanel
