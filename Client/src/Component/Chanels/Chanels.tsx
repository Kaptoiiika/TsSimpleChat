import "./Chanels.css"
import { useContext, useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { Accordion, AccordionDetails, Button, Modal } from "@mui/material"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"

import { BsChevronRight } from "react-icons/bs"
import { BiPlus } from "react-icons/bi"
import "./Chanels.css"

import CreateChanel from "./CreateChanel/CreateChanel"
import Chanel from "./Chanel"

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<BsChevronRight />} {...props} />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    margin: "0 0 0 0",
  },
}))

function Chanels() {
  // https://mui.com/components/lists/#simple-list
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

  return (
    <div className="Chanels">
      <h3 className="header Chanels-header">{`serverName`}</h3>

      <div className="chanels-fotter">
        <div className="chanels-fotter-user">
          <div className="chanels-fotter-icon">
            <img
              src="https://cdn.discordapp.com/avatars/782147867380285442/4acae783a7dba751a54c6306942dd0d7.webp?size=80"
              alt=""
            />
          </div>
          {/* https://mui.com/components/menus/ */}
          <div className="chanels-fotter-userData">
            <p className="chanels-fotter-userName">{"name"}</p>
            <p className="chanels-fotter-status">{"status"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chanels
