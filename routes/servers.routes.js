const { Router } = require("express")
const router = Router()
const config = require("config")
const jwt = require("jsonwebtoken")
const User = require("../models/User.js")

const postRegister = async (req, res) => {
  try {
    console.log(req.body)
    const { name, password } = req.body

    const candidat = await User.findOne({ name })
    console.log(candidat)

    if (candidat)
      return res
        .status(400)
        .json({ message: `Пользователь ${name} уже создан` })

    const user = new User({ name, password })
    await user.save()
    console.log("create user:", user)
    res.status(201).json({ message: "create user" })
  } catch (error) {
    res.status(500).json({ message: "error code 500", error })
  }
}

const postLogin = async (req, res) => {
  try {
    const { name, password } = req.body

    const user = await User.findOne({ name })
    if (!user)
      return res.status(400).json({ message: `Пользователь ${name} не найден` })

    if (user.password !== password)
      return res.status(400).json({ message: `Неверный пароль` })

    const token = jwt.sign({ userId: user.id }, config.get("jwtKey"), {
      expiresIn: "1d",
    })

    res.json({ token, userId: user.id })
  } catch (error) {
    res.status(500).json({ message: "error code 500" })
  }
}

const getUser = async (req, res) => {
  try {
    console.log("userId: ", req.body)
    const { userId } = req.body

    const data = userId.map(async (userid, index) => {
      return await User.findOne({ userid })
    })
    res.json({ data })
  } catch (error) {
    res.status(500).json({ message: "error code 500" })
  }
}
servers.get("", getServersALL)
