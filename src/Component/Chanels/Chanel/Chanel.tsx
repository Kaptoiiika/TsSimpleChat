import Button from "@material-ui/core/ButtonBase"

function Chanel({ chanel }: any) {
  function selectChanel(e: any) {
    const chanelId = Number(e.target.id.split(":")[1])
    console.log(`selected chanel to ${chanelId}`)
  }

  return (
    <Button
      id={`chanelID:${chanel.id}`}
      onClick={selectChanel}
      className={`chanels-item`}
    >
      {chanel.name}
    </Button>
  )
}

export default Chanel
