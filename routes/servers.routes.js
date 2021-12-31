const { Router } = require("express")
const router = Router()
const config = require("config")
const jwt = require("jsonwebtoken")
const User = require("../models/User.js")

const postRegister = async (req, res) => {
  try {

    await server.save()
    console.log("create user:", user)
    res.status(201).json({ message: "create user" })
  } catch (error) {
    res.status(500).json({ message: "error code 500", error })
  }
}


const getServer = async (req, res) => {
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

servers.get("", getServer)
