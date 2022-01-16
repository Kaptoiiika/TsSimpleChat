const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  author: { type: Types.ObjectId, required: true, ref: "User" },
  text: { type: String, required: true, max: 500 },
  dataCreate: { type: Date, default: new Date() },
})

schema.set("toJSON", {
  transform: (doc, { __v, ...rest }) => rest,
})

module.exports = model("Message", schema)
