const express = require("express")
const config = require("config")
const mongoose = require("mongoose")

const app = express()

app.use(express.json({extended:true}))
app.use("/api/user", require("./routes/user.routes.js"))
app.use("/api/server", require("./routes/server.routes.js"))

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



start()
