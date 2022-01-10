const { Router } = require("express")
const router = Router()
const config = require("config")
const { check, validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User.js")
const authMiddleware = require("../middleware/auth.middleware.js")
const FileManager = require("../services/fileManager.js")
const Server = require("../models/Server.js")

const registration = async (req, res) => {
  try {
    const validErr = validationResult(req)
    if (!validErr.isEmpty()) {
      return res
        .status(400)
        .json({ message: "incorect requset", errors: validErr.errors })
    }

    const { name, password } = req.body
    const candidat = await User.findOne({ name })
    if (candidat)
      return res
        .status(400)
        .json({ message: `Пользователь ${name} уже создан` })

    const hashPassword = await bcrypt.hash(password, 6)

    const user = new User({ name, password: hashPassword })
    await FileManager.createDir("users", user._id)
    await user.save()

    res.status(201).json({ message: `${name} создан` })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
  }
}

const login = async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await User.findOne({ name })
    if (!user)
      return res.status(404).json({ message: `Пользователь ${name} не найден` })

    const isPassValid = bcrypt.compareSync(password, user.password)
    if (!isPassValid)
      return res.status(400).json({ message: `Неверный пароль` })

    const token = jwt.sign({ id: user.id }, config.get("jwtKey"), {
      expiresIn: "30d",
    })

    res.json({ token, user })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
  }
}

const subscribe = async (req, res) => {
  try {
    const server = await Server.findOne({ name: req.params.name })
    const user = await User.findById(req.user.id)
    if (!server)
      return res
        .status(404)
        .json({ message: `server ${req.params.name} not found` })
    if (!server.membersId.includes(user.id)) {
      server.membersId.push(`${user._id}`)
      user.subscribers.push(`${server._id}`)
      server.save()
      user.save()
    }
    res.json({ server, user })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
  }
}

const avatar = async (req, res) => {
  try {
    const file = req.files.avatar
    const user = await User.findById(req.user.id)
    if (!user)
      return res.status(404).json({ message: `Пользователь не найден` })

    await FileManager.createFile("users", user.id, file)

    user.icon = file.name
    user.save()

    res.json({ message: "avatar uploaded" })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
  }
}

const auth = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    const token = jwt.sign({ id: user.id }, config.get("jwtKey"), {
      expiresIn: "30d",
    })
    res.json({ token, user: await user.populate({ path: 'subscribers', select: 'name' }) })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
  }
}

const getAvatar = async (req, res) => {
  try {
    console.log(req.params)
    const user = await User.findById(req.params.id)
    const filePath = `${config.get("filePath")}\\users\\${user.id}\\${
      user.icon
    }`
    res.sendFile(filePath)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
  }
}

const getUser = async (req, res) => {
  try {
    console.log(req.params)
    const data = await User.findById(req.params.id)

    res.json(data)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "error code 500", error: error.message })
  }
}

router.post(
  "/register",
  [
    check("name", "name is not string").isString(),
    check("password", "password length must be 4 to 32").isLength({
      min: 4,
      max: 32,
    }),
  ],
  registration
)
router.post("/login", login)
router.post("/upload/avatar", authMiddleware, avatar)

router.get("/subscribe/:name", authMiddleware, subscribe)
router.get("/auth", authMiddleware, auth)
router.get("/avatar/:id", getAvatar)
router.get("/:id/", getUser)
router.get("/", getUser)

module.exports = router
