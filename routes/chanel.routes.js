const { Router } = require("express")
const authMiddleware = require("../middleware/auth.middleware.js")
const router = Router()
const Chanel = require("../models/Chanel.js")
const Message = require("../models/Message.js")
const Server = require("../models/Server.js")
const User = require("../models/User.js")

const postCreate = async (req, res) => {
  try {
    const { name, ownerId, serverId } = req.body

    const server = await Server.findOne({ _id: serverId })
    const user = await User.findOne({ _id: ownerId })

    const chanel = new Chanel({ name, ownerId: user._id })

    if (!user || !server)
      return res.status(400).json({
        message: `Не удалось создать канал:${name} user:${!!user}, server:${!!server}`,
      })

    await chanel.save()
    server.chanelsId.push(`${chanel._id}`)
    await server.save()
    res.status(201).json({ message: "Канал создан" })
  } catch (error) {
    res.status(500).json({ message: `ChanelsCreate code 500 ` })
  }
}

const message = async (req, res) => {
  try {
    const { text, chanelId } = req.body
    const user = await User.findById(req.user.id)
    const chanel = await Chanel.findById(chanelId)

    if (!user || !chanel) {
      return res.status(400).json({
        message: `Не удалось создать сообщение ownerId:${!!ownerId}, chanelId:${!!chanelId}`,
      })
    }
    const message = new Message({ author: user.id, text: text })
    await message.save()

    chanel.messages.unshift(message.id)

    await chanel.save()
    
    res.status(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `messages code 500 ` })
  }
}

const getByID = async (req, res) => {
  try {
    const chanel = await Chanel.findById(req.params.id)
    await chanel.populate({
      path: "messages",
      options: { limit: 50 },
      populate: { path: "author", select: ["name", "icon"] },
    })
    res.json(chanel)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `messages code 500 ` })
  }
}

router.post("/create", authMiddleware, postCreate)
router.post("/message", authMiddleware, message)

router.get("/:id", getByID)

module.exports = router
