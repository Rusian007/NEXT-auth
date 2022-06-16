const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name:{
    type: String
  },
  username:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  }
})

const user = mongoose.models.user || mongoose.model("user", UserSchema)
module.exports = user
