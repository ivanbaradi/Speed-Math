//Connects mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Adds all user's info to the scoreboard
const User = mongoose.model('Scoreboard',
new Schema({
  name: {type: String, required: true},
  score: {type: Number, required: true}
}, {timestamps: true}))


module.export = User
