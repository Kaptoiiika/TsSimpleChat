const { Schema, model, Types } = require("mongoose")
const { options } = require("../routes/user.routes")

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  icon: { type: String, default: "" },
  subscribers: [{ type: Types.ObjectId, ref: "Server" }],
})

schema.set("toJSON", {
  transform: (doc, { __v, password, ...rest }) => rest,
})

module.exports = model("User", schema)
