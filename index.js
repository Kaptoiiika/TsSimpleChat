import express, { Router } from "express"
import config from "config"
import mongoose from "mongoose"

const app = express()

const PORT = config.get("port")

async function start() {
  try {
    await mongoose.connect(config.get("mongoURL"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}...`)
    })
  } catch (error) {
    console.log("server error", error.message)
    process.exit(1)
  }
}

// app.use("/api/servers", require("./routes/servers.routes.js"))

start()
