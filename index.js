const express = require("express")
const config = require("config")
const mongoose = require("mongoose")
const fileUpload = require("express-fileupload")

const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

app.use(fileUpload({}))
app.use(express.urlencoded())
app.use(express.json())

app.use("/api/user", require("./routes/user.routes.js"))
app.use("/api/server", require("./routes/server.routes.js"))
app.use("/api/chanel", require("./routes/chanel.routes.js"))

io.on("connection", (socket) => {
  console.log("a user connected")
  socket.on("chat message", (msg) => {
    console.log("message: " + msg)
  })
})

const PORT = config.get("port")

async function start() {
  try {
    await mongoose.connect(config.get("mongoURL"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    server.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}...`)
    })
  } catch (error) {
    console.log("server error", error.message)
    process.exit(1)
  }
}

start()
