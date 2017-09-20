var mongoose = require('../db')

var textShortSchema = mongoose.Schema({
  label: String,
  value: String,
  help: String,
  maxLength: Number,
  editor: String
})

exports.TextShort = mongoose.model('TextShort', textShortSchema)