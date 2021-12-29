import { serverList } from "../Data/Servers.js"

export const getServersALL = (req, res) => {
  res.status(200).json(serverList)
}
