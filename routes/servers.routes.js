import { Router } from "express"
import { getServersALL } from "../Controllers/servers.js"



export const servers = Router()

servers.get("", getServersALL)
