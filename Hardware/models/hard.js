var mongoose = require('mongoose');
var hardShema = mongoose.Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String,
  created:{
    type: Date,
    default: Date.now()
  }
})

module.exports.Hard = mongoose.model("Hard", hardShema)
