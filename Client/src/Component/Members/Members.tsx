import { useContext, useEffect, useState } from "react"
import { ServerContext } from "../../context/ServerContext"
import { useHttp } from "../../hooks/http.hook"
import Member from "./Member/Members"
import "./Members.css"

function Members() {
  const { request, loading } = useHttp()
  const { membersId } = useContext(ServerContext)

  const [userList, setUserList] = useState([
    {
      _id: "61cf918d32a3053ba9147e59name",
      name: "Tryren",
      subscribers: [],
    },
  ])

  useEffect(() => {
    async function getData() {
      const data = await Promise.all(
        membersId.map(async (userId) => {
          if (userId !== null) {
            return request(`api/user/${userId}`, "GET")
          }
        })
      )
      setUserList(data)
    }
    getData()
  }, [membersId])

  if (loading) {
    return (
      <div className="Members">
        <h3 className="header Members-header">someMembers</h3>
        <ul className="Members-list"></ul>
      </div>
    )
  }
  return (
    <div className="Members">
      <h3 className="header Members-header">someMembers</h3>
      <ul className="Members-list">
        {userList.map((user: any, index: number) => {
          if (user === undefined) return " "
          return <Member user={user} key={index} />
        })}
      </ul>
    </div>
  )
}

export default Members
