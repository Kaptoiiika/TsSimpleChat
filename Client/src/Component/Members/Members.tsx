
import "./Members.css"

function Members() {


  return (
    <div className="Members">
      <h3 className="header Members-header">someMembers</h3>
      <ul className="Members-list">
        {`userList.map((user: any, index: number) => {
          if (user === undefined) return " "
          return <Member user={user} key={index} />
        })`}
      </ul>
    </div>
  )
}

export default Members
