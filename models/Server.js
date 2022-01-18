const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  members: [{ type: Types.ObjectId, ref: "User" }],
  chanels: [{ type: Types.ObjectId, ref: "Chanel" }],
})

schema.set("toJSON", {
  transform: (doc, { __v, password, ...rest }) => rest,
})

module.exports = model("Server", schema)
