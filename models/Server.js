const { Schema, model, Types } = require("mongoose")
const { options } = require("../routes/user.routes")

const schema = new Schema({
  name: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  chanelsId: [{ type: Types.ObjectId }],
  membersId: [{ type: Types.ObjectId, required: true, ref: "Users" }],
})

schema.set("toJSON", {
  transform: (doc, { __v, password, ...rest }) => rest,
})

module.exports = model("Server", schema)
