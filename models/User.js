import { Schema, model, Types } from "mongoose"

const schema = new Schema({
  name: { type: string, required: true },
  password: { type: string, required: true },
  subscribers: { type: Types.ObjectID, ref: "server" },
})

export default model("User", schema)
