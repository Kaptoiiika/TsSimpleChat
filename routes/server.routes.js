const { Router } = require("express")
const router = Router()
const Server = require("../models/Server.js")
const User = require("../models/User.js")

const postCreateServer = async (req, res) => {
  try {
    const { name, password, membersId } = req.body

    const server = new Server({ name, password, membersId })
    const user = await User.findOne({ _id: membersId })
    if (!user)
      return res.status(400).json({
        message: `Не удалось создать сервер:${name} польщователь не найден`,
      })

    await server.save()
    user.subscribers.push(`${server._id}`)
    await user.save()
    res.status(201).json({ message: "CreateServer" })
  } catch (error) {
    res.status(500).json({ message: "error code 500" })
  }
}

const getServer = async (req, res) => {
  try {
    const data = await Server.findById(req.params.id)
    res.json(data)
  } catch (error) {
    if (req.params.id === "null")
      res.status(500).json({ message: `id = ${req.params.id}` })
    else res.status(500).json({ message: "error code 500" })
  }
}
const postAddUser = async (req, res) => {
  try {
    const { name, password, membersId } = req.body

    const server = await Server.findOne({ name: name })
    if (server.password !== password)
      return res.status(400).json({ message: `Неверный пароль` })

    const user = await User.findOne({ _id: membersId })
    if (!server || !user)
      return res.status(400).json({
        message: `Не найден сервер:${membersId}`,
      })
    user.subscribers.push(`${server._id}`)
    server.membersId.push(`${user._id}`)
    await server.save()
    await user.save()

    res.status(201).json({ message: "add user to server" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "error code 500" })
  }
}

router.post("/adduser", postAddUser)
router.post("/create", postCreateServer)
router.get("/:id", getServer)
router.get("", getServer)

module.exports = router
