const { Router } = require("express")
const authMiddleware = require("../middleware/auth.middleware.js")
const router = Router()
const Server = require("../models/Server.js")
const Message = require("../models/Message.js")
const Chanel = require("../models/Chanel.js")
const User = require("../models/User.js")

const Create = async (req, res) => {
  try {
    const { name } = req.body
    
    if (await Server.findOne({ name: name })) {
      return res.status(400).json({
        message: `Сервер:${name} уже создан`,
      })
    }

    const user = await User.findById(req.user.id)
    const message = new Message({
      author: user.id,
      text: `Hello ${name}`,
    })
    const chanel = new Chanel({ name: "chat", messages: [message.id] })
    const server = new Server({
      name,
      members: [user.id],
      chanels: [chanel.id],
    })

    if (!user)
      return res.status(400).json({
        message: `Не удалось создать сервер:${name} польщователь не найден`,
      })

    user.subscribers.push(`${server._id}`)

    await user.save()
    await message.save()
    await chanel.save()
    await server.save()

    res.status(201).json({ server })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
  }
}
const message = async (req, res) => {
  try {
    const { msg } = req.body
    console.log(req.params)
    const server = await Server.findById(req.params.serverId)
    const user = await User.findById(req.user.id)

    console.log(server, user)

    // await server.save()
    // await user.save()

    res.status(201).json({ message: "msg send" })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
  }
}
const getServer = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    const server = await Server.findById(req.params.id)

    await server.populate({ path: "chanels", select: "name" })
    console.log(server)

    res.json(server)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
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
router.post("/create", authMiddleware, Create)
router.post("/:serverId/message/:chanelId", authMiddleware, message)

router.get("/:id", authMiddleware, getServer)
router.get("", getServer)

module.exports = router
