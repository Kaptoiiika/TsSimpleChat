const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  subscribers: [{ type: Types.ObjectId, ref: "server" }]
})

module.exports = model("User", schema)
