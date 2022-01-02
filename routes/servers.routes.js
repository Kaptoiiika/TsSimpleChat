const { Router } = require("express")
const router = Router()

const postCreateServer = async (req, res) => {
  try {
    const { name, password } = req.body

    res.status(201).json({ message: "CreateServer" })
  } catch (error) {
    res.status(500).json({ message: "error code 500" })
  }
}

const getServer = async (req, res) => {
  try {

    res.json({ data })
  } catch (error) {
    res.status(500).json({ message: "error code 500" })
  }
}

router.post("/create", postCreateServer)
router.get("", getServer)

module.exports = router
