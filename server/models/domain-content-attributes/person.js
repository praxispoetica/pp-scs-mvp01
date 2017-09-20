var mongoose = require('../db')
var Location = require('../base-content-attributes/location').Location
var Media = require('../base-content-attributes/media').Media

var personSchema = mongoose.Schema({
  gender: String,
  name: {
    title: String,
    first: String,
    middle: String,
    maternal: String,
    paternal: String,
    last: String,
  },
  location: Location.schema,
  phones: [{
    name: String,
    number: String
  }],
  email: String,
  login: {
    username: String,
    password: String
  },
  dob: Date,
  avatar: Media.schema
})

exports.Person = mongoose.model('Person', personSchema)
