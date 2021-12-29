import config from "config"
import jwt from "jsonwebtoken"
import { usersList } from "../Data/Users.js"
import User from "../models/user.js"

export const getUserALL = (req, res) => {
  res.status(200).json(usersList)
}

export const postRegister = async (req, res) => {
  try {
    const { name, password } = req.body

    const candidat = await User.findOne({ name })
    if (!candidat)
      return res
        .status(400)
        .json({ message: `Пользователь ${name} уже создан` })

    const user = new User({ name, password })
    await user.save()
    res.status(201).json({ message: "create user" })
  } catch (error) {
    res.status(500).json({ message: "error code 500" })
  }
}

export const postLogin = async (req, res) => {
  try {
    const { name, password } = req.body

    const user = await User.findOne({ name })
    if (!user)
      return res.status(400).json({ message: `Пользователь ${name} не найден` })
    const token = jwt.sign({ userId: user.id }, config.get("jwtKey"), {expiresIn:'1d'})
    
    res.json({ token, userId:user.id })
  } catch (error) {
    res.status(500).json({ message: "error code 500" })
  }
}
