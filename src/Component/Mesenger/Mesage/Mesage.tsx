import './Message.css'
function Mesage({ Mesage }: any) {
  const { userId, msg } = Mesage
  console.log(userId, msg)
  return (
    <li className="Mesage">
      <img className="userIcon" src={`https://cdn.discordapp.com/avatars/321282827909857280/b3b2fb541418cd179898c1912b00ead0.png?size=80`}/>
      <h5 className="userName">{userId}</h5>
      <p className="msg">{msg}</p>
    </li>
  )
}

export default Mesage
