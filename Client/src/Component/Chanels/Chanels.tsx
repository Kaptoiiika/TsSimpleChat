import { useContext, useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { Accordion, AccordionDetails, Button, Modal } from "@mui/material"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"

import { BsChevronRight } from "react-icons/bs"
import { BiPlus } from "react-icons/bi"
import "./Chanels.css"
import { UserContext } from "../../context/UserContext"
import { ServerContext } from "../../context/ServerContext"
import { Loader } from "../Loader/Loader"
import { useHttp } from "../../hooks/http.hook"
import CreateChanel from "./CreateChanel/CreateChanel"

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<BsChevronRight />} {...props} />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "0",
  },
}))

function Chanels() {
  const { name, status } = useContext(UserContext)
  const { serverName, chanelsId, serverId } = useContext(ServerContext)
  const { request, loading } = useHttp()
  const [chanelList, setChanelsList] = useState([
    { name: "nothing", _id: "none" },
  ])

  const [expanded, setExpanded] = useState(true)
  const handleChange = () => {
    setExpanded(!expanded)
  }

  const [open, setOpen] = useState(false)
  const handleCreateMenu = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    async function getData() {
      const data = await Promise.all(
        chanelsId.map(async (chanelId) => {
          if (chanelId !== null) {
            return request(`api/chanel/${chanelsId}`, "GET")
          }
        })
      )
      setChanelsList(data)
    }
    getData()
  }, [chanelsId])

  if (loading || !serverId) {
    return (
      <div className="Chanels">
        <h3 className="header Chanels-header">{serverName}</h3>
        <div className="chanels-fotter">
          <div className="chanels-fotter-user">
            <div className="chanels-fotter-icon">
              <img
                src="https://cdn.discordapp.com/avatars/782147867380285442/4acae783a7dba751a54c6306942dd0d7.webp?size=80"
                alt=""
              />
            </div>
            <div className="chanels-fotter-userData">
              <p className="chanels-fotter-userName">{name}</p>
              <p className="chanels-fotter-status">{status}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="Chanels">
      <h3 className="header Chanels-header">{serverName}</h3>

      <div className="chanels-list">
        <Accordion
          expanded={expanded}
          style={{
            background: "none",
            color: "white",
            margin: 0,
          }}
          defaultExpanded
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{ cursor: "default" }}
            expandIcon={
              <Button
                style={{ color: "white" }}
                onClick={handleChange}
                startIcon={
                  <BsChevronRight style={{ color: "white", width: "16px" }} />
                }
              />
            }
          >
            <div className="Chanels-group">
              <span style={{ margin: "0 0 0 8px" }}>Текстовые каналы</span>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <CreateChanel />
              </Modal>
              <Button
                style={{ color: "white" }}
                onClick={handleCreateMenu}
                startIcon={<BiPlus />}
              />
            </div>
          </AccordionSummary>
          <AccordionDetails style={{ margin: 0 }}>
            {chanelList.map((obj) => {
              if (obj) return <p key={obj._id}>{obj.name}</p>
            })}
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="chanels-fotter">
        <div className="chanels-fotter-user">
          <div className="chanels-fotter-icon">
            <img
              src="https://cdn.discordapp.com/avatars/782147867380285442/4acae783a7dba751a54c6306942dd0d7.webp?size=80"
              alt=""
            />
          </div>
          <div className="chanels-fotter-userData">
            <p className="chanels-fotter-userName">{name}</p>
            <p className="chanels-fotter-status">{status}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chanels
