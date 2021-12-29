import { Router } from "express"
import { postLogin, postRegister } from "../Controllers/users.js"

export const users = Router()

users.post("/register", postRegister)
users.post("/login", postLogin)