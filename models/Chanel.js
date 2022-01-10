const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  name: { type: String, required: true },
  messages: [{ type: Types.ObjectId, ref: "Chanel" }],
})

schema.set("toJSON", {
  transform: (doc, { __v, ...rest }) => rest,
})

module.exports = model("Chanel", schema)
