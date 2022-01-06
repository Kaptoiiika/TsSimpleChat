const { Router } = require("express")
const router = Router()
const Chanel = require("../models/Chanel.js")
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

const postMessage = async (req, res) => {
  try {
    const { message, ownerId, chanelId } = req.body
    const chanel = await Chanel.findOne({ _id: chanelId })
    const user = await User.findOne({ _id: ownerId })

    if (!user || !chanel) {
      return res.status(400).json({
        message: `Не удалось создать сообщение ownerId:${!!ownerId}, chanelId:${!!chanelId}`,
      })
    }

    chanel.messages.push({ message, ownerId: user._id })

    await chanel.save()

    res.status(201).json({ message: "messages send" })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `messages code 500 ` })
  }
}

const getByID = async (req, res) => {
  try {
    const data = await Chanel.findById(req.params.id)
    res.json(data)
  } catch (error) {
    if (req.params.id === "null")
      res.status(500).json({ message: `id = ${req.params.id}` })
    else res.status(500).json({ message: "error code 500" })
  }
}

router.post("/create", postCreate)
router.post("/message/create", postMessage)
router.get("/:id", getByID)

module.exports = router
