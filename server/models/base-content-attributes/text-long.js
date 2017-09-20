var mongoose = require('../db')

var textLongSchema = mongoose.Schema({
  label: String,
  value: String,
  help: String,
  maxLines: Number,
  maxLength: Number,
  editor: String
})

exports.TextLong = mongoose.model('TextLong', textLongSchema)