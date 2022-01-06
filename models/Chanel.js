const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  name: { type: String, required: true },
  ownerId: { type: String, required: true },
  messages: [{ type: Object }],
})

schema.set("toJSON", {
  transform: (doc, { __v, ...rest }) => rest,
})

module.exports = model("Chanel", schema)
