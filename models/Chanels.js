const { Schema, model, Types } = require("mongoose")
const { options } = require("../routes/user.routes")

const schema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  messages: [{ type: Types.ObjectId, ref: "chanels" }],
})

schema.set("toJSON", {
  transform: (doc, { __v, password, ...rest }) => rest,
})

module.exports = model("Server", schema)
